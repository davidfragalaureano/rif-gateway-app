import { getContractInstance } from './utils'
import ProviderABI from '../../shared/contracts/ABIs/Providers.json'
import IdentityLendingServiceABI from '../../shared/contracts/ABIs/IdentityLendingService.json'
import BorrowServiceABI from '../../shared/contracts/ABIs/BorrowService.json'
import UserIdentityFactoryABI from '../../shared/contracts/ABIs/UserIdentityFactory.json'
import ServiceABI from '../../shared/contracts/ABIs/Service.json'
import { Provider } from '@ethersproject/abstract-provider'
import { BigNumber, Signer } from 'ethers'
import { Providers, LendingService, BorrowService, Service, UserIdentityFactory } from './typechain-types'
import { ServiceListing, ServiceType } from '../../services/types'

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

export async function getAllListings (service: Service) : Promise<ServiceListing[]> {
  const listingsCount = await service.getListingsCount()
  const serviceType = await service.serviceType()
  const serviceProviderName = await service.serviceProviderName()
  const promises = []
  for (let i = 0; i < +listingsCount; i++) {
    promises.push(service.getListing(BigNumber.from(i)))
  }
  const listingWithoutType = await Promise.all(promises)
  const listings: ServiceListing[] = listingWithoutType.map((l) => ({
    id: +l.id,
    minAmount: +l.minAmount / 1e18,
    maxAmount: +l.maxAmount / 1e18,
    minDuration: +l.minDuration / 1e18,
    maxDuration: +l.maxDuration / 1e18,
    interestRate: +l.interestRate / 1e18 * 100,
    loanToValue: +l.loanToValue / 1e18,
    loanToValueTokenAddr: l.loanToValueTokenAddr,
    currency: l.currency,
    payBackOption: l.payBackOption,
    enabled: l.enabled,
    serviceProviderName: serviceProviderName,
    listingName: serviceType === ServiceType.Borrowing ? 'Borrow Service' : 'Lending Service',
    serviceType,
    serviceContractAddress: service.address,
    used: false,
    balance: 0
  }))
  return listings
}
