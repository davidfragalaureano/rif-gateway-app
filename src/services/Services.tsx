
import React, { useState } from 'react'

import { MainLink } from '../shared/StyledComponents'
import { Container, Typography } from '@mui/material'
import { withStyles } from '@mui/styles'

import { IService } from '../shared/utils'
import { Link as RouterLink } from 'react-router-dom'

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
  const [services, setServices] = useState<IService[]>([])
  const [activeServices, setActiveServices] = useState<IService[]>([])

  return (
    <>
      <Row>
        <Typography style={{ fontWeight: 'bold', textAlign: 'left' }} variant="h2" component="h2">Service History</Typography>
      </Row>
      {activeServices.map((service, index) => (
        <ServiceItem
          key={`active-service-item-row${index}`}
          serviceProviderName={service.serviceProviderName}
          listingAddress={service.listingAddress}
          listingName={service.listingName}
        />
      ))}

      <Row>
        <Typography style={{ fontWeight: 'bold', textAlign: 'left' }} variant="h2" component="h2">Available Services</Typography>
      </Row>
      {services.map((service, index) => (
        <ServiceItem
          key={`service-item-row${index}`}
          serviceProviderName={service.serviceProviderName}
          listingAddress={service.listingAddress}
          listingName={service.listingName}
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

const ServiceItem: React.FC<ServiceItemProps> = ({ serviceProviderName, listingName, listingAddress }) => {
  return (
    <Row>
      <div style={{ display: 'flex', gap: '15px' }}>
        <Typography variant="h3" component="span">{listingName}</Typography>
        <Typography variant="h3" component="span">{serviceProviderName}</Typography>
      </div>
      <MainLink component={RouterLink} to={'/wsb/send?token='}>Consume</MainLink>
    </Row>
  )
}
