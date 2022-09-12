
import React, { useState, useEffect } from 'react'
import { constants } from 'ethers'

import { MainLink } from '../shared/StyledComponents'
import { Container, Grid, Typography } from '@mui/material'
import { withStyles } from '@mui/styles'

import useConnector from '../connect/useConnector'

import { fetchTokenBalance, formatBigNumber, ITokenBalance, shortAddress } from '../shared/utils'
import { ENetwork, SupportedNetworks } from '../connect/rLogin'
import { Link as RouterLink } from 'react-router-dom'
import { getTokenLogo, getTokenSymbol } from '../shared/tokenMetadata'

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

const Services = () => {
  const [services, setServices] = useState<any[]>([])
  const [activeServices, setActiveServices] = useState<any[]>([])

  return (
    <>
      <Row>
        <Typography style={{ fontWeight: 'bold', textAlign: 'left' }} variant="h2" component="h2">Service History</Typography>
      </Row>
      {activeServices.map((service, index) => (
        <ServiceItem
          key={`active-service-item-row${index}`}
          balance={formatBigNumber(service.balance, service.decimals)}
          tokenSymbol={getTokenSymbol(service.address, network ?? ENetwork.NotSupported, service.symbol)}
          tokenLogo={getTokenLogo(service.address, network ?? ENetwork.NotSupported)}
        />
      ))}

      <Row>
        <Typography style={{ fontWeight: 'bold', textAlign: 'left' }} variant="h2" component="h2">Available Services</Typography>
      </Row>
      {services.map((service, index) => (
        <ServiceItem
          key={`service-item-row${index}`}
          balance={formatBigNumber(service.balance, service.decimals)}
          tokenSymbol={getTokenSymbol(service.address, network ?? ENetwork.NotSupported, service.symbol)}
          tokenLogo={getTokenLogo(service.address, network ?? ENetwork.NotSupported)}
        />
      ))}
    </>
  )
}

export default Services

interface ServiceItemProps {
  serviceProviderName: string,
  listingName: string,
  listingAddress: string
}

const ServiceItem: React.FC<ServiceItemProps> = ({ balance, tokenSymbol, tokenLogo }) => {
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
