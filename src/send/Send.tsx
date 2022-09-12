import React, { useState, useEffect } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { MainButton, Column } from '../shared/StyledComponents'

import { Grid, TextField, Select, MenuItem, Typography } from '@mui/material'
import { withStyles } from '@mui/styles'

import { ethers } from 'ethers'
import { tokensMetadataMainnet, tokensMetadataTestnet } from '../shared/tokenMetadata'

import Resolver from '@rsksmart/rns-resolver.js'

import useConnector from '../connect/useConnector'

import shallow from 'zustand/shallow'

// @ts-ignore
// eslint-disable-next-line new-cap
const resolver = new Resolver.forRskTestnet()

export const Row = withStyles({
  root: {
    border: '0px solid black'
  }
})(Grid)

export const CustomLabelField = withStyles({
  root: {
    '& input#amount': {
      paddingLeft: '80px'
    },
    '& input#to': {
      paddingLeft: '40px'
    },
    '& input#nonce': {
      paddingLeft: '70px'
    },
    '& input#gasLimit': {
      paddingLeft: '180px'
    },
    '& input#gasPrice': {
      paddingLeft: '150px'
    },
    '& div#selectedToken': {
      paddingLeft: '1px'
    }

  }
})(TextField)

export const ControlCell = withStyles({
  root: {
    border: '0px solid black',
    padding: '5px',
    '& div.advancedOptionsLabel': {
      textAlign: 'center',
      '& span': {
        cursor: 'pointer',
        textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        color: 'white',
        fontSize: '20px',
        fontWeight: 'bold'
      }
    },
    '& div.resolverStatus': {
      marginTop: '5px',
      color: 'white',
      fontSize: '18px',
      fontWeight: 'bold'
    }
  }
})(Grid)

export const Address = withStyles({
  root: {
    fontWeight: 'bold',
    textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    color: 'white',
    fontSize: '20px',
    width: '100%',
    height: '50px',
    padding: '5px',
    border: '0px solid black'
  }
})(Grid)

interface IAdvancedOptions {
  gasPrice : string
  gasLimit : string
  nonce : number
}
const Send = () => {
  const [selectedToken, setSelectedToken] = useState('RBTC')
  const [amount, setAmount] = useState(0.0)
  const [showAdvancedOptions, setShowAdvancedOptions] = useState(false)
  const [gasPrice, setGasPrice] = useState('')
  const [gasLimit, setGasLimit] = useState('')
  const [nonce, setNonce] = useState('')
  const [to, setTo] = useState('')
  const [receiverAddress, setReceiverAddress] = useState('')
  const [resolverStatus, setResolverStatus] = useState('')

  const [signer, network] = useConnector(state => [state.signer, state.network], shallow)
  const isMainnet = network === 30
  const metadataTokens = Object.entries(isMainnet ? tokensMetadataMainnet : tokensMetadataTestnet).map(keyValue => { // @ts-ignore
    return { address: keyValue[0], ...keyValue[1] }
  })
  const erc20Abi = require('./erc20abi.json')
  const location = useLocation()
  const history = useHistory()
  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const qToken = params.get('token')
    if (qToken) {
      setSelectedToken(qToken)
    } else {
      setSelectedToken('RBTC')
    }
  }, [location])

  const handleChange = async (event:any) => {
    history.push({
      pathname: '/wsb/send',
      search: `?token=${event.target.value}`
    })
  }

  const handleSend = async () => {
    try {
      ethers.utils.getAddress(receiverAddress.toLowerCase())
      if (selectedToken === 'RBTC') {
        await handlePayToAddress(amount, receiverAddress)
      } else {
        await handleTransferToken(amount, receiverAddress, selectedToken)
      }
    } catch (e:any) {
      if (e.code === 'INVALID_ARGUMENT') {
        setResolverStatus('Invalid Input')
      }
    }
  }

  const handleTransferToken = async (selectedAmount:number, selectedAddress:string, tokenSymbol:string) => {
    const token = metadataTokens.find(token => token.symbol === tokenSymbol)
    if (token) {
      const contract = new ethers.Contract(
        token.address.toLowerCase(),
        erc20Abi,
        signer
      )

      const options = {} as IAdvancedOptions
      if (showAdvancedOptions) {
        const gasPriceInGwei = ethers.BigNumber.from(gasPrice)
        const gasPriceInWei = gasPriceInGwei.mul(1000000000)// convert from gwei to wei
        options.gasLimit = gasLimit
        options.gasPrice = gasPriceInWei.toString()
        options.nonce = parseInt(nonce)
      }

      const decimals = await contract.decimals() as number
      const numberOfTokens = ethers.utils.parseUnits(selectedAmount.toString(), decimals)
      contract.transfer(selectedAddress.toLowerCase(), numberOfTokens, options).then((transferResult:any) => {
        console.log(transferResult)
        console.log('Token sent')
      })
    }
  }
  const handlePayToAddress = async (selectedAmount:number, selectedAddress:string) => {
    if (!signer) return
    const options = {} as IAdvancedOptions

    if (showAdvancedOptions) {
      const gasPriceInGwei = ethers.BigNumber.from(gasPrice)
      const gasPriceInWei = gasPriceInGwei.mul(1000000000)// convert from gwei to wei
      options.gasLimit = ethers.utils.hexlify(ethers.BigNumber.from(gasLimit))
      options.gasPrice = ethers.utils.hexlify(gasPriceInWei)
      options.nonce = parseInt(nonce)
    }

    signer.sendTransaction({
      to: selectedAddress.toLowerCase(),
      value: ethers.utils.parseEther(selectedAmount.toString()),
      ...options
    })
      .then((txObj) => {
        console.log('txHash', txObj.hash)
      })
  }

  const rskDomainValidation = (e:any) => {
    const selectedTo = (e && e.target && e.target.value)
    setTo(selectedTo)
    if (!selectedTo) {
      return
    }

    const re = /\.rsk$/ // match *.rsk domains
    const isValid = re.test(String(selectedTo).toLowerCase())

    if (!selectedTo) {
      setResolverStatus('Enter a Email Address')
    } else if (!isValid) {
      console.log({ selectedTo })
      setReceiverAddress(selectedTo)
      setResolverStatus('')
    } else {
      setResolverStatus('Fetching address...')
      resolver.addr(selectedTo).then((address:string) => {
        setReceiverAddress(address)
        setResolverStatus(address)
      }).catch((e:any) => {
        setResolverStatus('Domain with no address')
      }) // gets rs
    }
  }

  return (
    <Column>
      <Row item xs={12} >
        <Row container >
          <ControlCell item xs={12} >
            <Typography style={{ fontWeight: 'bold', textAlign: 'left' }} variant="h2" component="h2">Send</Typography>

          </ControlCell>
          <ControlCell item xs={12} md={5} >
            <Select
                id="selectedToken"
                value={selectedToken}
                onChange={ handleChange}
                sx={{ width: 1 }}
            >
              <MenuItem value="RBTC">
                RBTC
              </MenuItem>
              {metadataTokens.map(token => <MenuItem key={token.address} value={token.symbol}>{token.symbol}</MenuItem>)}

            </Select>
          </ControlCell>
          <ControlCell item xs={12} md={7}>
            <CustomLabelField id="amount" label="Amount" onChange={event => setAmount(parseFloat(event.target.value))} autoComplete='off'/>
          </ControlCell>

        </Row>
        <Row container >
          <ControlCell item xs={12} md={8} >
            <CustomLabelField id="to" label="To" value={to} onChange={rskDomainValidation} autoComplete='off'/>
            <div className={'resolverStatus'}>{resolverStatus}</div>

          </ControlCell>
          <ControlCell item xs={12} md={4}>
            <MainButton
                variant="contained"
                color="primary"
                onClick={handleSend}
            >
              Send
            </MainButton>
          </ControlCell>
        </Row>
        <Row container >
          <ControlCell item xs={12} >
            <div className={'advancedOptionsLabel'}>
              <span onClick={e => setShowAdvancedOptions(!showAdvancedOptions)} >
                Advanced
              </span>
            </div>
          </ControlCell>
        </Row>
        {showAdvancedOptions && <Row container >
          <ControlCell item xs={12} >
            <CustomLabelField id="nonce" label="Nonce" value={nonce} onChange={e => setNonce((e.target.value))} sx={{ width: 1 }} autoComplete='off'/>
          </ControlCell>
          <ControlCell item xs={12} >
            <CustomLabelField id="gasLimit" label="Gas Limit (gas units)" value={gasLimit} onChange={e => setGasLimit((e.target.value))} sx={{ width: 1 }} autoComplete='off'/>
          </ControlCell>
          <ControlCell item xs={12} >
            <CustomLabelField id="gasPrice" label="Gas Price (gwei)" value={gasPrice} onChange={e => setGasPrice((e.target.value))} sx={{ width: 1 }} autoComplete='off'/>
          </ControlCell>
        </Row>}
      </Row>
    </Column>
  )
}

export default Send
