
import React, { useEffect, useState } from 'react'

import { MainLink } from '../shared/StyledComponents'
import { Container, Typography } from '@mui/material'
import { withStyles } from '@mui/styles'
import { Link as RouterLink } from 'react-router-dom'
import { RIFService, ServiceItemProps } from './types'
import shallow from 'zustand/shallow'
import useConnector from '../connect/useConnector'
import { ContractInstances } from '../shared/contracts'

const Row = withStyles({
  root: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    padding: 0
  }
})(Container)

const Services = () => {
  let [services, setServices] = useState<RIFService[]>([])
  let [activeServices, setActiveServices] = useState<RIFService[]>([])
  const [signer, network, account] = useConnector(state => [state.signer, state.network, state.account], shallow)

  activeServices = [
    {
      serviceProviderName: 'Tropykus',
      listingAddress: '0xasdf',
      listingName: 'Lending Service',
      balance: 500,
      apy: 5.4
    },
    {
      serviceProviderName: 'Growr',
      listingAddress: '0xasdf',
      listingName: 'Borrowing Service',
      balance: 300,
      apy: 3.5
    }
  ]

  services = [
    {
      serviceProviderName: 'Tropykus',
      listingAddress: '0xasdf',
      listingName: 'Borrowing Service',
      balance: 0,
      apy: 0
    },
    {
      serviceProviderName: 'Growr',
      listingAddress: '0xasdf',
      listingName: 'Lending Service',
      balance: 0,
      apy: 0
    }
  ]

  const fetchServices = async () => {
    if (!signer) {
      throw new Error('Empty signer')
    }

    const { Providers } = ContractInstances(signer)
    const servicesAddresses = await Providers.getServices()
    console.log(servicesAddresses)
  }

  useEffect(() => {
     fetchServices()
  }, [])

  return (
    <>
      <Row>
        <Typography style={{ fontWeight: 'bold', textAlign: 'left' }} variant="h2" component="h2">
          Service History
        </Typography>
      </Row>
      {activeServices.map((service, index) => (
        <ServiceItem
          key={`active-service-item-row${index}`}
          serviceProviderName={service.serviceProviderName}
          listingAddress={service.listingAddress}
          listingName={service.listingName}
          available={false}
          balance={service.balance}
          apy={service.apy}
        />
      ))}

      <Row>
        <Typography style={{ fontWeight: 'bold', textAlign: 'left' }} variant="h2" component="h2">
          Available Services
        </Typography>
      </Row>
      {services.map((service, index) => (
        <ServiceItem
          key={`service-item-row${index}`}
          serviceProviderName={service.serviceProviderName}
          listingAddress={service.listingAddress}
          listingName={service.listingName}
          available={true}
          balance={service.balance}
          apy={service.apy}
        />
      ))}
    </>
  )
}

export default Services



const ServiceItem: React.FC<ServiceItemProps> = ({ serviceProviderName, listingName, listingAddress, available, balance, apy }) => {
  return (
    <Row style={{ border: 'solid white', padding: '15px', background: 'white', borderRadius: '15px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', color: 'black' }}>
        <Typography style={{ color: 'black' }} variant="h3" component="span">{listingName}</Typography>
        <Typography style={{ color: 'black' }} variant="body1" component="span">{serviceProviderName}</Typography>
      </div>
      {!available
        ? <div style={{ display: 'flex', flexDirection: 'column', color: 'black' }}>
            <Typography variant="body1" component="span">
              Balance: {balance} rBTC
            </Typography>
            <Typography variant="body1" component="span">
              APY: {apy}%
            </Typography>
          </div>
        : <div /> }
      <MainLink component={RouterLink} style={{ color: 'white', background: '#2196f3', padding: '15px', borderRadius: '15px' }} to={'/wsb/send?token='}>
        {available ? 'Consume' : 'Withdraw'}
      </MainLink>
    </Row>
  )
}
