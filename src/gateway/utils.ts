import { BigNumberish, ethers } from 'ethers'
import IdentityFactoryJson from './ABIs/UserIdentityFactory.json'
import DummierLendingServiceJson from './ABIs/DummierLendingService.json'

const IDENTITY_FACTORY_ADDRESS = process.env.IDENTITY_FACTORY_ADDRESS || ''
const DUMMIER_SERVICE_PROVIDER_ADDRESS = process.env.DUMMIER_SERVICE_PROVIDER_ADDRESS || ''

export async function authorizeServiceProvider (
  signer: ethers.Signer,
  serviceProviderAddress: string,
  isAuthorized: boolean = true
) {
  const identityFactory = getUserIdentityFactory(signer)
  await (await identityFactory.authorize(serviceProviderAddress, isAuthorized)).wait()
}

export async function lend (signer: ethers.Signer, amount: BigNumberish, listingId: BigNumberish) {
  const lsp = getDummierLendingService(signer)
  await (await lsp.lend({ value: amount })).wait()
}

export async function withdraw (signer: ethers.Signer, amount: BigNumberish, listingId: BigNumberish) {
  const lsp = getDummierLendingService(signer)
  await (await lsp.withdraw()).wait()
}

export async function getLendedBalance (signer: ethers.Signer) {
  const lsp = getDummierLendingService(signer)
  return await lsp.getBalance()
}

// Helper functions
const getUserIdentityFactory = (signer: ethers.Signer): ethers.Contract => {
  return new ethers.Contract(IDENTITY_FACTORY_ADDRESS, IdentityFactoryJson.abi, signer)
}

const getDummierLendingService = (signer: ethers.Signer): ethers.Contract => {
  return new ethers.Contract(DUMMIER_SERVICE_PROVIDER_ADDRESS, DummierLendingServiceJson.abi, signer)
}
