import React, { useEffect, useState } from 'react'
import { MainLink } from '../shared/StyledComponents'
import { Button, Container, Typography } from '@mui/material'
import { withStyles } from '@mui/styles'
import { Link as RouterLink } from 'react-router-dom'
import { RIFService, ServiceItemProps } from './types'
import shallow from 'zustand/shallow'
import useConnector from '../connect/useConnector'
import { getProviders, getLendingService, getUserIdentityFactory } from '../shared/contracts'
import { BigNumber, ethers } from 'ethers'
import { LensRounded } from '@mui/icons-material'


const SERVICE_KEY = 'SERVICES'
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

const mockActiveServices = JSON.parse(localStorage.getItem(SERVICE_KEY) || '[]')
const Services = () => {
  // eslint-disable-next-line no-unused-vars
  const [historicServices, setHistoricServices] = useState<RIFService[]>(mockActiveServices)
  // eslint-disable-next-line no-unused-vars
  const [availableServices, setAvailableServices] = useState<RIFService[]>([])
  // eslint-disable-next-line no-unused-vars
  const [signer, account] = useConnector(state => [state.signer, state.account], shallow)

  
  useEffect(() => {
    if (!signer || !account) return

    const promises = historicServices.map(async (service: RIFService) => {
      const lendingService = getLendingService(signer, service.listingAddress)
      const balance = await lendingService.getBalance()
      service.balance = +balance / 1e18

      return service
    })
    
    Promise.all(promises).then((updatedServices: RIFService[]) => {
      setHistoricServices(updatedServices)
    })
  })

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
        console.log(listings)
        
        const listingObjects = listings.map((listing) => ({
          serviceProviderName: 'ACME',
          listingAddress: servicesAddresses[0],
          listingName: 'Lending Service',
          balance: 0,
          apy: +listing.rewardRate,
          id: +listing.id
        }))

        setAvailableServices([...availableServices, ...listingObjects])
      } catch (error) {
        console.log(error)
      }
    }
    fetchServices()
  }, [signer, account])

  const authorizeServiceProvider = async (serviceAddr: string) => {
    if (!signer || !account) return

    const identityFactory = getUserIdentityFactory(signer)

    await (await identityFactory.authorize(serviceAddr, true)).wait()
  }

  const consumeService = async (serviceItem: ServiceItemProps) => {
    if (!signer || !account) return

    const { id: consumedServiceId, listingAddress } = serviceItem
    const value = ethers.utils.parseEther('50')
    const lendingService = getLendingService(signer, listingAddress)
    
    await authorizeServiceProvider(listingAddress)
    await (await lendingService.lend({ value })).wait()
    
    const balanceLent = await lendingService.getBalance()
    serviceItem.balance = (+balanceLent / 1e18)
    
    const _historicServices = JSON.parse(localStorage.getItem(SERVICE_KEY) || '[]')
    const servicesUpdated = [..._historicServices, serviceItem]
    localStorage.setItem(SERVICE_KEY, JSON.stringify(servicesUpdated))
    
    setHistoricServices(servicesUpdated)
    setAvailableServices(availableServices.filter(({ id }) => id !== consumedServiceId))
  }

  return (
    <>
      <Row>
        <Typography style={{ fontWeight: 'bold', textAlign: 'left' }} variant="h2" component="h2">
          Service History
        </Typography>
      </Row>
      {historicServices.map((service, index) => (
        <ServiceItem
          key={`active-service-item-row${index}`}
          serviceProviderName={service.serviceProviderName}
          listingAddress={service.listingAddress}
          listingName={service.listingName}
          available={false}
          balance={service.balance}
          apy={service.apy}
          id={service.id}
          onClickHandler={consumeService}
        />
      ))}

      <Row>
        <Typography style={{ fontWeight: 'bold', textAlign: 'left' }} variant="h2" component="h2">
          Available Services
        </Typography>
      </Row>
      {availableServices.map((service, index) => (
        <ServiceItem
          key={`service-item-row${index}`}
          serviceProviderName={service.serviceProviderName}
          listingAddress={service.listingAddress}
          listingName={service.listingName}
          available={true}
          balance={service.balance}
          apy={service.apy}
          id={service.id}
          onClickHandler={consumeService}
        />
      ))}
    </>
  )
}

export default Services

const ServiceItem: React.FC<ServiceItemProps> = ({ serviceProviderName, listingName, listingAddress, available, balance, apy, id, onClickHandler }) => {
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
      
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Button variant='contained' size='medium' className="float-right" onClick={() => { onClickHandler({ serviceProviderName, listingName, listingAddress, available, balance, apy, id }) }}>
          {available ? 'Consume' : 'Withdraw'}
        </Button>
      </div>
 
    </Row>
  )
}
