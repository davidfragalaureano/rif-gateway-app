import React, { useEffect, useState } from 'react'
import { Button, Container, Typography } from '@mui/material'
import { withStyles } from '@mui/styles'
import { BorrowServiceListing, RIFService, ServiceItemProps, ServiceTypes } from './types'
import shallow from 'zustand/shallow'
import useConnector from '../connect/useConnector'
import { getProviders, getLendingService, getUserIdentityFactory, getService, getBorrowService, LendingService, BorrowService } from '../shared/contracts'
import { BigNumber, ethers } from 'ethers'

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
  const [historicServices, setHistoricServices] = useState<RIFService[]>(mockActiveServices)
  const [availableServices, setAvailableServices] = useState<RIFService[]>([])
  const [signer, account] = useConnector(state => [state.signer, state.account], shallow)

  useEffect(() => {
    const fetchServices = async () => {
      if (!signer || !account) return

      const Providers = getProviders(signer)
      try {
        const servicesAddresses = await Providers.getServices()
        const services = servicesAddresses.map(address => getService(signer, address))
        const servicesWithType = await Promise.all(services.map(async (service) => { return { serviceType: await service.serviceType(), service: service } }))
        const borrowServices = servicesWithType.filter(({ serviceType }) => serviceType === ServiceTypes.Borrowing).map(({ service }) => getBorrowService(signer, service.address))


        const listings = (await Promise.all(borrowServices.map(service => getListings(service)))).reduce((acc, val) => acc.concat(val), []) as BorrowServiceListing[]

        const listingObjects = listings.map((listing, index) => ({
          serviceProviderName: 'Tropykus',
          listingAddress: servicesAddresses[0],
          listingName: 'Borrow Service',
          balance: 0,
          apy: +listing.interestRate,
          id: index,
          used: false
        }))

        setAvailableServices([...availableServices, ...listingObjects])
      } catch (error) {
        console.log(error)
      }
    }
    const fetchBalances = async () => {
      if (!signer || !account) return

      const promises = historicServices.map(async (service: RIFService) => {
        const lendingService = getLendingService(signer, service.listingAddress)
        const balance = await lendingService.getBalance(ethers.constants.AddressZero)
        service.balance = +balance / 1e18

        return service
      })

      const updatedServices = await Promise.all(promises)
      setHistoricServices(updatedServices)
    }
    fetchServices()
    fetchBalances()
  }, [signer, account])

  const authorizeServiceProvider = async (serviceAddr: string) => {
    if (!signer || !account) return

    const identityFactory = getUserIdentityFactory(signer)

    await (await identityFactory.authorize(serviceAddr, true)).wait()
  }

  const withdrawService = async (serviceItem: ServiceItemProps) => {
    if (!signer || !account) return

    const lendingService = getLendingService(signer, serviceItem.listingAddress)
    await (await lendingService.withdraw()).wait()

    let updatedUsedServices = JSON.parse(localStorage.getItem(SERVICE_KEY) || '[]')
    updatedUsedServices = updatedUsedServices.map((service: ServiceItemProps) => {
      if (service.id === serviceItem.id) service.used = true
      return service
    })
    setHistoricServices(updatedUsedServices)
    localStorage.setItem(SERVICE_KEY, JSON.stringify(updatedUsedServices))
  }

  const consumeService = async (serviceItem: ServiceItemProps) => {
    if (!signer || !account) return

    const { id: consumedServiceId, listingAddress } = serviceItem
    const value = ethers.utils.parseEther('50')
    const lendingService = getLendingService(signer, listingAddress)

    await authorizeServiceProvider(listingAddress)
    await (await lendingService.lend({ value })).wait()

    const balanceLent = await lendingService.getBalance(ethers.constants.AddressZero)
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
          used={service.used}
          onClickHandler={withdrawService}
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
          used={service.used}
          onClickHandler={consumeService}
        />
      ))}
    </>
  )
}

export default Services

const ServiceItem: React.FC<ServiceItemProps> = ({ serviceProviderName, listingName, listingAddress, available, balance, apy, id, used, onClickHandler }) => {
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
          : <div />}
        <Typography variant="body1" component="span">
          APY: {apy}%
        </Typography>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Button variant='contained' size='medium' className="float-right" disabled={!available && used}
          onClick={() => { onClickHandler({ serviceProviderName, listingName, listingAddress, available, balance, apy, id }) }}>
          {available ? 'Consume' : 'Withdraw'}
        </Button>
      </div>

    </Row>
  )
}
async function getListings (service: LendingService | BorrowService) {
  const listingsCount = await service.getListingsCount()
  const promises = []
  for (let i = 0; i < +listingsCount; i++) {
    promises.push(service.getListing(BigNumber.from(i)))
  }
  const listings = await Promise.all(promises)
  return listings
}

