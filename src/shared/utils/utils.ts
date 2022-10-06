import { ENetwork } from '../../connect/rLogin'
import { BigNumber as EthBigNumber } from '@ethersproject/bignumber'
import BigNumber from 'bignumber.js'
import { Signer, Contract } from 'ethers'
import erc20Abi from '../../send/erc20abi.json'

export const NetworkExplorer = {
  [ENetwork.NotSupported]: null,
  [ENetwork.RSKMainnet]: 'https://explorer.rsk.co/',
  [ENetwork.RSKTestnet]: 'https://explorer.testnet.rsk.co/',
  [ENetwork.Ganache]: 'http://127.0.0.1:8545/',
  [ENetwork.Hardhat]: 'http://127.0.0.1:8545/'
}

export function shortAddress (address?: string): string {
  if (!address) return ''

  return `${address.substr(0, 6)}...${address.substr(
      address.length - 4,
      address.length
    )}`
}

export function getAddressExplorerLink (network?: ENetwork, address?: string): string | null {
  if (!address || !network || network === ENetwork.NotSupported) return null

  const uri = new URL(`address/${address}`, NetworkExplorer[network])

  return uri.href
}

export const formatBigNumber = (price: EthBigNumber, decimals: number) => {
  const bigNumber = new BigNumber(price.toString()).div(10 ** decimals)!

  if (bigNumber.decimalPlaces()! > 0) {
    return bigNumber.toFormat(4)
  }

  return bigNumber.toFormat()
}

export interface ITokenBalance {
  address: string,
  balance: EthBigNumber,
  decimals: number,
  symbol: string
}

export const fetchTokenBalance = async (signer: Signer, address: string, account: string): Promise<ITokenBalance> => {
  const contract = new Contract(
    address.toLowerCase(),
    erc20Abi,
    signer
  )

  const balance = await contract.balanceOf(account) as EthBigNumber
  const decimals = await contract.decimals() as number
  const symbol = await contract.symbol() as string

  return {
    address,
    balance,
    decimals,
    symbol
  }
}
