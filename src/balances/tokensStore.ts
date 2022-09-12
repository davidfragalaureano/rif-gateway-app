import { ENetwork } from '../connect/rLogin'

const defaultTokensByNetwork: any = {
  [ENetwork.RSKTestnet]: ['0x19f64674D8a5b4e652319F5e239EFd3bc969a1FE', '0xC3De9f38581F83e281F260D0ddBAac0E102Ff9F8'],
  [ENetwork.RSKMainnet]: ['0x2aCc95758f8b5F583470bA265Eb685a8f45fC9D5', '0x2d919f19D4892381d58EdEbEcA66D5642ceF1A1F']
}

const tokensStore = (network: ENetwork) => {
  const keyName = `tokens-stored-${network}`

  const defaultTokens = defaultTokensByNetwork[network] ?? []

  const getAll = (): string[] => {
    const tokensStored = localStorage.getItem(keyName)
    const tokensList = tokensStored ? JSON.parse(tokensStored) : defaultTokens

    return tokensList
  }

  return {
    getAll,

    addToken: (tokenAddress: string) => {
      const tokensList = getAll()

      tokensList.push(tokenAddress)

      localStorage.setItem(keyName, JSON.stringify(tokensList))
    }
  }
}

export default tokensStore
