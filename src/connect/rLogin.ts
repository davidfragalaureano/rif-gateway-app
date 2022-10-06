import RLogin from '@rsksmart/rlogin'
import WalletConnectProvider from '@walletconnect/web3-provider'

export enum ENetwork {
  // eslint-disable-next-line no-unused-vars
  NotSupported = -1,
  // eslint-disable-next-line no-unused-vars
  RSKMainnet = 30,
  // eslint-disable-next-line no-unused-vars
  RSKTestnet = 31,
  // eslint-disable-next-line no-unused-vars
  Hardhat = 31337,
  // eslint-disable-next-line no-unused-vars
  Ganache = 1337,

}

export const SupportedNetworks = [ENetwork.RSKMainnet, ENetwork.RSKTestnet, ENetwork.Ganache, ENetwork.Hardhat]

export const rLogin = new RLogin({
  cacheProvider: true, // change to true to cache user's wallet choice
  providerOptions: {
    // read more about providers setup in https://github.com/web3Modal/web3modal/
    walletconnect: {
      package: WalletConnectProvider, // setup wallet connect for mobile wallet support
      options: {
        rpc: {
          [ENetwork.RSKTestnet]: 'https://public-node.testnet.rsk.co', // use RSK public nodes to connect to the testnet
          [ENetwork.RSKMainnet]: 'https://public-node.rsk.co', // use RSK public nodes to connect to the mainnet
          [ENetwork.Ganache]: 'http://127.0.0.1:8545/',
          [ENetwork.Hardhat]: 'http://127.0.0.1:8545/'
        }
      }
    }
  },
  supportedChains: SupportedNetworks
})

export const isRLoginConnected = () => {
  const result = !!localStorage.getItem('WEB3_CONNECT_CACHED_PROVIDER')

  return result
}
