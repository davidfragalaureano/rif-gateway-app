// @ts-ignore
import contractMapMainnet from '@rsksmart/rsk-contract-metadata'
// @ts-ignore
import contractMapTestNet from '@rsksmart/rsk-testnet-contract-metadata'
import { constants } from 'ethers'
import { ENetwork } from '../connect/rLogin'

import rbtcMainnet from '../assets/RBTC-mainnet.svg'
import rbtcTestnet from '../assets/RBTC-testnet.svg'
import tokenMainnet from '../assets/token-mainnet.svg'
import tokenTestnet from '../assets/token-testnet.svg'

export interface ITokenMetadata {
    [address: string]: {
        name: string,
        logo?: string,
        erc20?: boolean,
        symbol: string,
        decimals: number
    }
}

export const imagesUrlMainnet = 'https://raw.githubusercontent.com/rsksmart/rsk-testnet-contract-metadata/master/images'

export const tokensMetadataMainnet = contractMapMainnet as ITokenMetadata

export const imagesUrlTestnet = 'https://raw.githubusercontent.com/rsksmart/rsk-contract-metadata/master/images'

export const tokensMetadataTestnet = contractMapTestNet as ITokenMetadata

export const getTokenLogo = (address: string, network: ENetwork) => {
  const tokensMetadata = network === ENetwork.RSKMainnet ? tokensMetadataMainnet : tokensMetadataTestnet

  const imageBaseUrl = network === ENetwork.RSKMainnet ? imagesUrlMainnet : imagesUrlTestnet

  if (tokensMetadata[address] && tokensMetadata[address].logo) {
    return `${imageBaseUrl}/${tokensMetadata[address].logo}`
  }

  if (address === constants.AddressZero) { // is rbtc
    return network === ENetwork.RSKMainnet ? rbtcMainnet : rbtcTestnet
  }

  return network === ENetwork.RSKMainnet ? tokenMainnet : tokenTestnet
}

export const getTokenSymbol = (address: string, network: ENetwork, fallbackSymbol: string) => {
  const tokensMetadata = network === ENetwork.RSKMainnet ? tokensMetadataMainnet : tokensMetadataTestnet

  if (tokensMetadata[address] && tokensMetadata[address].symbol) {
    return tokensMetadata[address].symbol
  }

  if (address === constants.AddressZero) { // is rbtc
    return 'RBTC'
  }

  return fallbackSymbol
}
