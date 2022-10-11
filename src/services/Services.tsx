import React, { useEffect, useState } from 'react'
import { Button, Container, Typography } from '@mui/material'
import { withStyles } from '@mui/styles'
import { ServiceListing, ServiceItemProps } from './types'
import shallow from 'zustand/shallow'
import useConnector from '../connect/useConnector'
import {
  getAllListings,
  getBorrowService,
  getLendingService,
  getProviders,
  getService,
  getUserIdentityFactory
} from '../shared/contracts'
import { ethers } from 'ethers'

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
  const [historicServiceListings, setHistoricServiceListings] = useState<ServiceListing[]>(mockActiveServices)
  const [availableServiceListings, setAvailableServiceListings] = useState<ServiceListing[]>([])
  const [signer, account] = useConnector(state => [state.signer, state.account], shallow)

  useEffect(() => {
    const fetchServices = async () => {
      if (!signer || !account) return

      const Providers = getProviders(signer)
      try {
        const servicesAddresses = await Providers.getServices()
        const services = servicesAddresses.map(address => getService(signer, address))

        const listings = (await Promise.all(services.map(service => getAllListings(service)))).reduce((acc, val) => acc.concat(val), [])

        setAvailableServiceListings([...availableServiceListings, ...listings])
      } catch (error) {
        console.log(error)
      }
    }
    const fetchBalances = async () => {
      if (!signer || !account) return

      const promises = historicServiceListings.map(async (service: ServiceListing) => {
        const borrowingService = getService(signer, service.serviceContractAddress)
        const balance = await borrowingService.getBalance(ethers.constants.AddressZero)
        service.balance = +balance / 1e18

        return service
      })

      const updatedServices = await Promise.all(promises)
      setHistoricServiceListings(updatedServices)
    }
    (async () => {
      await Promise.all([fetchServices(), fetchBalances()])
    })()
  }, [signer, account])

  const authorizeServiceProvider = async (serviceAddr: string) => {
    if (!signer || !account) return

    const identityFactory = getUserIdentityFactory(signer)
    console.log('identityFactory', identityFactory.address)

    await (await identityFactory.authorize(serviceAddr, true)).wait()
  }

  const withdrawService = async (serviceItem: ServiceItemProps) => {
    if (!signer || !account) return

    const lendingService = getLendingService(signer, serviceItem.serviceContractAddress)
    await (await lendingService.withdraw()).wait()

    let updatedUsedServices = JSON.parse(localStorage.getItem(SERVICE_KEY) || '[]')
    updatedUsedServices = updatedUsedServices.map((service: ServiceItemProps) => {
      if (service.id === serviceItem.id) service.used = true
      return service
    })
    setHistoricServiceListings(updatedUsedServices)
    localStorage.setItem(SERVICE_KEY, JSON.stringify(updatedUsedServices))
  }

  const consumeService = async (serviceItem: ServiceItemProps) => {
    if (!signer || !account) return
    const amountToBorrow = 100

    const {
      id: consumedServiceId,
      serviceContractAddress
    } = serviceItem
    const value = ethers.utils.parseEther(amountToBorrow.toString())
    console.log('value', +value / 1e18)
    const borrowingService = getBorrowService(signer, serviceContractAddress)
    console.log('borrowingService', borrowingService)
    console.log('borrowingService', borrowingService.address)

    console.log('authorizing..')
    await authorizeServiceProvider(serviceContractAddress)
    console.log('authorize done..')

    const currency = process.env.REACT_APP_DOC_ADDRESS || ethers.constants.AddressZero
    console.log('currency', currency)
    const amountToLend = await borrowingService.connect(signer).calculateRequiredCollateral(value, currency)
    console.log('amountToLend', +amountToLend / 1e18)
    console.log('borrowing')
    await (await borrowingService.borrow(
      value,
      currency,
      serviceItem.id,
      0,
      { value: amountToLend }
    )).wait()

    console.log('borrow done...')
    const balanceLent = await borrowingService.getBalance(ethers.constants.AddressZero)
    serviceItem.balance = (+balanceLent / 1e18)

    const _historicServices = JSON.parse(localStorage.getItem(SERVICE_KEY) || '[]')
    const servicesUpdated = [..._historicServices, serviceItem]
    localStorage.setItem(SERVICE_KEY, JSON.stringify(servicesUpdated))

    setHistoricServiceListings(servicesUpdated)
    setAvailableServiceListings(availableServiceListings.filter(({ id }) => id !== consumedServiceId))
  }

  return (
    <>
      <Row>
        <Typography style={{
          fontWeight: 'bold',
          textAlign: 'left'
        }} variant="h2" component="h2">
          Service History
        </Typography>
      </Row>
      {historicServiceListings.map((service, index) => (
        <ServiceItem
          key={`active-service-item-row${index}`}
          serviceProviderName={service.serviceProviderName}
          serviceContractAddress={service.serviceContractAddress}
          listingName={service.listingName}
          available={false}
          balance={service.balance}
          interestRate={service.interestRate}
          id={service.id}
          used={service.used}
          onClickHandler={withdrawService}
        />
      ))}

      <Row>
        <Typography style={{
          fontWeight: 'bold',
          textAlign: 'left'
        }} variant="h2" component="h2">
          Available Services
        </Typography>
      </Row>
      {availableServiceListings.map((service, index) => (
        <ServiceItem
          key={`service-item-row${index}`}
          serviceProviderName={service.serviceProviderName}
          serviceContractAddress={service.serviceContractAddress}
          listingName={service.listingName}
          balance={service.balance}
          interestRate={service.interestRate}
          id={service.id}
          used={service.used}
          available={true}
          onClickHandler={consumeService}
        />
      ))}
    </>
  )
}

export default Services

const ServiceItem: React.FC<any> = ({
  serviceProviderName,
  listingName,
  serviceContractAddress,
  available,
  balance,
  interestRate,
  id,
  used,
  onClickHandler
}) => {
  return (
    <Row style={{
      padding: '15px',
      background: 'white',
      borderRadius: '15px'
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        color: 'black'
      }}>
        <Typography style={{ color: 'black' }} variant="h3" component="span">{listingName}</Typography>
        <Typography style={{ color: 'black' }} variant="body1" component="span">{serviceProviderName}</Typography>
      </div>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        color: 'black'
      }}>
        {!available
          ? <Typography variant="body1" component="span">
            Balance: {balance} rBTC
          </Typography>
          : <div/>}
        <Typography variant="body1" component="span">
          APY: {interestRate}%
        </Typography>
      </div>

      <div style={{
        display: 'flex',
        flexDirection: 'column'
      }}>
        <Button variant="contained" size="medium" className="float-right" disabled={!available && used}
                onClick={() => {
                  onClickHandler({
                    serviceProviderName,
                    listingName,
                    serviceContractAddress,
                    available,
                    balance,
                    interestRate,
                    id
                  })
                }}>
          {available ? 'Consume' : 'Withdraw'}
        </Button>
      </div>

    </Row>
  )
}
