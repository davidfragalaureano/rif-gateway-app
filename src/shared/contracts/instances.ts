import { getContractInstance } from './utils'
import ProviderABI from '../../shared/contracts/ABIs/Providers.json'
import { Provider } from '@ethersproject/abstract-provider'
import { Signer } from 'ethers'
import { Providers } from './typechain-types/contracts/services'

export type RIFContracts = {
    Providers: Providers
}

export default (signerOrProvider: Signer | Provider): RIFContracts => ({
  Providers: getContractInstance<Providers>('Providers', ProviderABI.abi, signerOrProvider)
})
