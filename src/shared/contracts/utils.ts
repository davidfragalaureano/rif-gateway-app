import { Contract, ContractInterface, Signer, providers } from 'ethers'

export const getContractInstance = <C extends Contract>(
  addressOrName: string,
  contractInterface: ContractInterface,
  signerOrProvider?: Signer | providers.Provider
): C => new Contract(addressOrName, contractInterface, signerOrProvider) as C

export const getWeb3Provider = (provider: unknown) => new providers.Web3Provider(provider as any)
