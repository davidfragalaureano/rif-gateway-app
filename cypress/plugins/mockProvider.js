import { personalSign, decrypt } from 'eth-sig-util'

const provider = (startProps) => {
  const {
    address, privateKey, chainId, debug
  } = startProps

  /* Logging */
  // eslint-disable-next-line no-console
  const log = (...args) => debug && console.log('🦄', ...args)

  const mockFunctions = {
    eth_sendTransaction: [],
    eth_getBalance: [],
    eth_call: []
  }

  const buildProvider = {
    isMetaMask: true,
    networkVersion: chainId,
    chainId: `0x${chainId.toString(16)}`,
    selectedAddress: address,

    addMock (key, fn) {
      mockFunctions[key].push(fn)
    },

    clearMocks () {
      mockFunctions.eth_call = []
      mockFunctions.eth_getBalance = []
      mockFunctions.eth_sendTransaction = []
    },

    async request (props) {
      log(`request[${props.method}]`)
      switch (props.method) {
        case 'eth_requestAccounts':
        case 'eth_accounts':
          return Promise.resolve([this.selectedAddress])
        case 'net_version':
          return Promise.resolve(this.networkVersion)
        case 'eth_chainId':
          return Promise.resolve(this.chainId)

        case 'personal_sign': {
          const privKey = Buffer.from(privateKey, 'hex')
          const signed = personalSign(privKey, { data: props.params[0] })
          log('signed', signed)
          return Promise.resolve(signed)
        }
        case 'eth_decrypt': {
          log('eth_decrypt', props)
          const stripped = props.params[0].substring(2)
          const buff = Buffer.from(stripped, 'hex')
          const data = JSON.parse(buff.toString('utf8'))
          return Promise.resolve(decrypt(data, privateKey))
        }
        case 'eth_getBalance':
        case 'eth_call':
        case 'eth_sendTransaction': {
          const method = props.method
          const mocks = mockFunctions[method]

          // eslint-disable-next-line no-restricted-syntax
          for (const mock of mocks) {
            // eslint-disable-next-line no-await-in-loop
            const result = await mock(props)

            if (result) {
              return result
            }
          }

          return Promise.reject(new Error(`Could not find a mock for ${props.method}.`))
        }
        default:
          log(`resquesting missing method ${props.method}`)
          // eslint-disable-next-line prefer-promise-reject-errors
          return Promise.reject(`The method ${props.method} is not implemented by the mock provider.`)
      }
    },

    sendAsync (props, cb) {
      switch (props.method) {
        case 'eth_accounts':
          cb(null, { result: [this.selectedAddress] })
          break
        case 'net_version': cb(null, { result: this.networkVersion })
          break
        default: log(`Method '${props.method}' is not supported yet.`)
      }
    },
    on (props) {
      log('registering event:', props)
    },
    removeAllListeners () {
      log('removeAllListeners', null)
    }
  }

  log('Mock Provider ', buildProvider)
  return buildProvider
}

export default provider
