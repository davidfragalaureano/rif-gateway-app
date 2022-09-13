import { BigNumberish, ethers } from 'ethers'
import IdentityFactoryJson from '../shared/contracts/ABIs/UserIdentityFactory.json'
import IdentityLendingServiceJson from '../shared/contracts//ABIs/IdentityLendingService.json'

const IDENTITY_FACTORY_ADDRESS = process.env.IDENTITY_FACTORY_ADDRESS || ''
const IDENTITY_SERVICE_PROVIDER_ADDRESS = process.env.IDENTITY_SERVICE_PROVIDER_ADDRESS || ''

export async function authorizeServiceProvider (
  signer: ethers.Signer,
  serviceProviderAddress: string,
  isAuthorized: boolean = true
) {
  const identityFactory = getUserIdentityFactory(signer)
  await (await identityFactory.authorize(serviceProviderAddress, isAuthorized)).wait()
}

export async function lend (signer: ethers.Signer, amount: BigNumberish): Promise<ethers.ContractTransaction> {
  const lsp = getIdentityLendingService(signer)
  return await lsp.lend({ value: amount })
}

export async function withdraw (signer: ethers.Signer): Promise<ethers.ContractTransaction> {
  const lsp = getIdentityLendingService(signer)
  return await lsp.withdraw()
}

export async function getLendedBalance (signer: ethers.Signer): Promise<BigNumberish> {
  const lsp = getIdentityLendingService(signer)
  return await lsp.getBalance()
}

// Helper functions
const getUserIdentityFactory = (signer: ethers.Signer): ethers.Contract => {
  return new ethers.Contract(IDENTITY_FACTORY_ADDRESS, IdentityFactoryJson.abi, signer)
}

const getIdentityLendingService = (signer: ethers.Signer): ethers.Contract => {
  return new ethers.Contract(IDENTITY_SERVICE_PROVIDER_ADDRESS, IdentityLendingServiceJson.abi, signer)
}
