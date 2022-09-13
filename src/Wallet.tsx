import React from 'react'
import { Typography } from '@mui/material'
import shallow from 'zustand/shallow'
import { ENetwork } from './connect/rLogin'
import useConnector from './connect/useConnector'
import { Column, MainLink, Row } from './shared/StyledComponents'
import { NetworkExplorer, shortAddress } from './shared/utils/utils'

const NETWORK_DESCRIPTION = {
  [ENetwork.NotSupported]: 'Not supported',
  [ENetwork.RSKMainnet]: 'RSK Mainnet',
  [ENetwork.RSKTestnet]: 'RSK Testnet',
  [ENetwork.Ganache]: 'Ganache'
}

const Wallet = () => {
  const [account, network, disconnect] = useConnector(state => [state.account, state.network, state.disconnect], shallow)

  return (
    <Column>
      <Row>
        <Typography data-testid="wallet-info" style={{ fontWeight: 'bold', textAlign: 'left' }} variant="h2" component="h2">
          Information
        </Typography>
      </Row>
      <Row>
        <Typography data-testid="account-label" variant="h3" component="span">Account:</Typography>
        <Typography data-testid="account-value" variant="h3" component="span">{shortAddress(account)}</Typography>
        <MainLink data-testid="account-copy" component="button" onClick={disconnect}>disconnect</MainLink>
      </Row>
      <Row>
        <Typography data-testid="network-label" variant="h3" component="span">Network:</Typography>
        <Typography data-testid="network-value" variant="h3" component="span">{NETWORK_DESCRIPTION[network ?? ENetwork.NotSupported]}</Typography>
        <MainLink data-testid="explorer-link" href={NetworkExplorer[network ?? ENetwork.NotSupported] ?? '#'} target="_blank" rel="noopener noreferrer">explorer</MainLink>
      </Row>
    </Column>
  )
}

export default Wallet
