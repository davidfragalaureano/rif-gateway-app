import React, { useEffect, useState } from 'react'
import { MainLink } from '../shared/StyledComponents'
import { Container, Typography } from '@mui/material'
import { withStyles } from '@mui/styles'
import { Link as RouterLink } from 'react-router-dom'
import { RIFService, ServiceItemProps } from './types'
import shallow from 'zustand/shallow'
import useConnector from '../connect/useConnector'
import { getProviders, getLendingService } from '../shared/contracts'
import { ethers } from 'ethers'

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

const mockActiveServices = [
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

const mockServices = [
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

const Services = () => {
  // eslint-disable-next-line no-unused-vars
  const [services, setServices] = useState<RIFService[]>([])
  // eslint-disable-next-line no-unused-vars
  const [activeServices, setActiveServices] = useState<RIFService[]>(mockActiveServices)
  // eslint-disable-next-line no-unused-vars
  const [signer, network, account] = useConnector(state => [state.signer, state.network, state.account], shallow)

  useEffect(() => {
    const fetchServices = async () => {
      if (!signer || !account) return

      const Providers = getProviders(signer)
      try {
        const servicesAddresses = await Providers.getServices()
        const service = getLendingService(signer, servicesAddresses[0])
        const listingsCount = await service.getListingCount()
        const promises = []
        for (let i = 0; i < +listingsCount; i++) {
          promises.push(service.getListing(ethers.constants.AddressZero, i))
        }
        const listings = await Promise.all(promises)
        const listingObjects = listings.map((listing) => ({
          serviceProviderName: 'ACME',
          listingAddress: servicesAddresses[0],
          listingName: 'Lending Service',
          balance: 0,
          apy: +listing.rewardRate
        }))
        setServices([...services, ...listingObjects])
      } catch (error) {
        console.log(error)
      }
    }
    fetchServices()
  }, [signer, account])

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
    <Row style={{ padding: '15px', background: 'white', borderRadius: '15px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', color: 'black' }}>
        <Typography style={{ color: 'black' }} variant="h3" component="span">{listingName}</Typography>
        <Typography style={{ color: 'black' }} variant="body1" component="span">{serviceProviderName}</Typography>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', color: 'black' }}>
      {!available
        ? <Typography variant="body1" component="span">
              Balance: {balance} rBTC
            </Typography>
        : <div /> }
        <Typography variant="body1" component="span">
          APY: {apy}%
        </Typography>
      </div>
      <MainLink component={RouterLink} style={{ color: 'white', background: '#2196f3', padding: '15px', borderRadius: '15px' }} to={'/wsb/send?token='}>
        {available ? 'Consume' : 'Withdraw'}
      </MainLink>
    </Row>
  )
}
