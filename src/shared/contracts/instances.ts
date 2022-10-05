import { getContractInstance } from './utils'
import ProviderABI from '../../shared/contracts/ABIs/Providers.json'
import IdentityLendingServiceABI from '../../shared/contracts/ABIs/IdentityLendingService.json'
import BorrowServiceABI from '../../shared/contracts/ABIs/BorrowService.json'
import UserIdentityFactoryABI from '../../shared/contracts/ABIs/UserIdentityFactory.json'
import ServiceABI from '../../shared/contracts/ABIs/Service.json'
import { Provider } from '@ethersproject/abstract-provider'
import { Signer } from 'ethers'
import { Providers, LendingService, BorrowService, Service } from './typechain-types/contracts/services'
import { UserIdentityFactory } from './typechain-types/contracts/userIdentity'

export function getProviders (signerOrProvider: Signer | Provider) {
  return getContractInstance<Providers>(process.env.REACT_APP_PROVIDER_CONTRACT || '', ProviderABI.abi, signerOrProvider)
}

export function getLendingService (signerOrProvider: Signer | Provider, address: string) {
  return getContractInstance<LendingService>(address, IdentityLendingServiceABI.abi, signerOrProvider)
}

export function getUserIdentityFactory (signerOrProvider: Signer | Provider) {
  return getContractInstance<UserIdentityFactory>(process.env.REACT_APP_IDENTITY_FACTORY || '', UserIdentityFactoryABI.abi, signerOrProvider)
}

export function getBorrowService (signerOrProvider: Signer | Provider, address: string) {
  return getContractInstance<BorrowService>(address, BorrowServiceABI.abi, signerOrProvider)
}

export function getService (signerOrProvider: Signer | Provider, address: string) {
  return getContractInstance<Service>(address, ServiceABI.abi, signerOrProvider)
}
