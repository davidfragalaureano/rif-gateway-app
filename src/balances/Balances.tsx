
import React, { useState, useEffect } from 'react'
import { constants } from 'ethers'

import { MainLink } from '../shared/StyledComponents'
import { Container, Grid, Typography } from '@mui/material'
import { withStyles } from '@mui/styles'

import useConnector from '../connect/useConnector'

import { fetchTokenBalance, formatBigNumber, ITokenBalance, shortAddress } from '../shared/utils'
import shallow from 'zustand/shallow'
import { ENetwork, SupportedNetworks } from '../connect/rLogin'
import { Link as RouterLink } from 'react-router-dom'
import { getTokenLogo, getTokenSymbol } from '../shared/tokenMetadata'
import AddToken from './AddToken'
import tokensStore from './tokensStore'

export const ControlCell = withStyles({
  root: {
    border: '0px solid black',
    padding: '5px',
    '& div.advancedOptionsLabel': {
      textAlign: 'center',
      textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      color: 'white',
      fontSize: '20px',
      fontWeight: 'bold',
      cursor: 'pointer'
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

const Row = withStyles({
  root: {
    display: 'flex',
    maxWidth: 480,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    padding: 0
  }
})(Container)

const RBTC_DECIMALS = 18
const RBTC_SYMBOL = 'RBTC'

const Balances = () => {
  const [rbtcBalance, setRbtcBalance] = useState('')
  const [signer, network, account] = useConnector(state => [state.signer, state.network, state.account], shallow)

  const [tokens, setTokens] = useState<string[]>([])
  const [balances, setBalances] = useState<ITokenBalance[]>([])

  useEffect(() => {
    if (!network || network === ENetwork.NotSupported) {
      return
    }

    const storedTokens = tokensStore(network).getAll()

    setTokens(storedTokens)
  }, [network])

  useEffect(() => {
    if (!signer || !account) return

    const fetchBalances = async () => {
      const balance = await signer.getBalance()
      setRbtcBalance(formatBigNumber(balance, RBTC_DECIMALS))
    }
    fetchBalances()
  }, [signer, account])

  useEffect(() => {
    if (!signer || !account || !tokens || tokens.length === 0) return

    const fetchBalances = async () => {
      const balances: ITokenBalance[] = []

      for (const token of tokens) {
        const balance = await fetchTokenBalance(signer, token, account)

        balances.push(balance)
      }

      setBalances(balances)
    }
    fetchBalances()
  }, [signer, account, tokens])

  return (
    <>
      <Row>
        <Typography style={{ fontWeight: 'bold', textAlign: 'left' }} variant="h2" component="h2">Balances</Typography>
        <AddToken onComplete={(address) => {
          setTokens(prev => [...prev, address])
          tokensStore(network ?? ENetwork.NotSupported).addToken(address)
        }} />
      </Row>
      <Row>
        <Typography data-testid="account-label" variant="h3" component="span">Account:</Typography>
        <Typography data-testid="account-value" variant="h3" component="span">{shortAddress(account)}</Typography>
        <MainLink component={RouterLink} to={'/wsb/receive'}>receive</MainLink>
      </Row>
      {SupportedNetworks.includes(network ?? ENetwork.NotSupported) && (
        <TokenBalanceRow
          balance={rbtcBalance}
          tokenSymbol={RBTC_SYMBOL}
          tokenLogo={getTokenLogo(constants.AddressZero, network ?? ENetwork.NotSupported)} />
      )}
      {balances.map((balance, index) => (
        <TokenBalanceRow
          key={`token-balance-row${index}`}
          balance={formatBigNumber(balance.balance, balance.decimals)}
          tokenSymbol={getTokenSymbol(balance.address, network ?? ENetwork.NotSupported, balance.symbol)}
          tokenLogo={getTokenLogo(balance.address, network ?? ENetwork.NotSupported)}
        />
      ))}
    </>
  )
}

export default Balances

interface ITokenBalanceProps {
  balance: string,
  tokenSymbol: string,
  tokenLogo: string
}

const TokenBalanceRow: React.FC<ITokenBalanceProps> = ({ balance, tokenSymbol, tokenLogo }) => {
  return (
    <Row>
        <div style={{ display: 'flex', gap: '15px' }}>
          <div style={{ display: 'flex', width: 50, height: 50, justifyContent: 'center' }}>
            <img style={{ height: 50 }} src={tokenLogo} alt={tokenSymbol} />
          </div>
          <Typography variant="h3" component="span">{balance} {tokenSymbol}</Typography>
        </div>
        <MainLink component={RouterLink} to={`/wsb/send?token=${tokenSymbol}`}>send</MainLink>
    </Row>
  )
}
