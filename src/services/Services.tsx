
import React, { useState } from 'react'

import { MainLink } from '../shared/StyledComponents'
import { Container, Typography } from '@mui/material'
import { withStyles } from '@mui/styles'

import { IService } from '../shared/utils'
import { Link as RouterLink } from 'react-router-dom'

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
  let [services, setServices] = useState<IService[]>([])
  let [activeServices, setActiveServices] = useState<IService[]>([])

  activeServices = [
    {
      serviceProviderName: 'Tropykus',
      listingAddress: '0xasdf',
      listingName: 'Lending Service',
      balance: 500,
      apy: 5.4
    } as IService,
    {
      serviceProviderName: 'Growr',
      listingAddress: '0xasdf',
      listingName: 'Borrowing Service',
      balance: 300,
      apy: 3.5
    } as IService
  ]

  services = [
    {
      serviceProviderName: 'Tropykus',
      listingAddress: '0xasdf',
      listingName: 'Borrowing Service',
      balance: 0,
      apy: 0
    } as IService,
    {
      serviceProviderName: 'Growr',
      listingAddress: '0xasdf',
      listingName: 'Lending Service',
      balance: 0,
      apy: 0
    } as IService
  ]

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

interface ServiceItemProps {
  serviceProviderName: string,
  listingName: string,
  listingAddress: string,
  available: boolean,
  balance: number,
  apy: number
}

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
