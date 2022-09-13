import {
  AppBar,
  Container,
  Hidden,
  Link,
  LinkTypeMap,
  Toolbar,
  IconButton,
  Drawer,
  Box,
  List,
  ListItem,
  ListItemText
} from '@mui/material'
import { withStyles, makeStyles } from '@mui/styles'
import { OverridableComponent } from '@mui/material/OverridableComponent'
import React, { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import logoRif from '../assets/logo-rif-full.svg'
import MenuIcon from '@mui/icons-material/Menu'

import { ContentWrapper } from '../shared/StyledComponents'

interface Props {
    children: any
}

const LinksWrapper = withStyles({
  root: {
    display: 'flex',
    gap: '60px',
    alignItems: 'center'
  }
})(Container)

const MenuLink: OverridableComponent<LinkTypeMap> = withStyles({
  root: {
    fontWeight: 'bold',
    fontSize: '21px',
    lineHeight: '26px',
    textAlign: 'center',
    color: '#fff'
  }
})(Link) as any

const CustomToolbar = withStyles({
  root: {
    minHeight: 151
  }
})(Toolbar)

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <ContentWrapper maxWidth="xl">
      <AppBar position="fixed" style={{ boxShadow: 'none', background: 'transparent' }}>
        <CustomToolbar>
          <LinksWrapper>
            <img style={{ paddingTop: 36, paddingBottom: 36 }} src={logoRif} alt="rBench" />
            <Hidden mdDown>
              <MenuLink component={RouterLink} to="/wsb/wallet">Wallet</MenuLink>
              <MenuLink component={RouterLink} to="/wsb/send">Send</MenuLink>
              <MenuLink component={RouterLink} to="/wsb/receive">Receive</MenuLink>
              <MenuLink component={RouterLink} to="/services">Services</MenuLink>
            </Hidden>
            <Hidden mdUp>
              <div style={{ display: 'flex', flex: 1, justifyContent: 'flex-end' }}>
                <MobileMenu />
              </div>
            </Hidden>
          </LinksWrapper>
        </CustomToolbar>
      </AppBar>
      <CustomToolbar />
      {children}
    </ContentWrapper>
  )
}

export default Layout

const useStyles = makeStyles(() => ({
  menuItemText: {
    fontWeight: 'bold',
    fontSize: 18
  }
}))

const MobileMenu = () => {
  const [drawerOpened, setDrawerOpened] = useState(false)

  const classes = useStyles()

  return <>
    <div>
      <IconButton
        aria-label="menu"
        color="inherit"
        onClick={() => setDrawerOpened(true)}
        size="large">
        <MenuIcon />
      </IconButton>
    </div>
    <Drawer
      anchor={'right'}
      open={drawerOpened}
      onClose={() => setDrawerOpened(false)}
      PaperProps={{
        style: {
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column'
        }
      }}
    >
      <Box
        sx={{
          width: 150
        }}
        role="presentation"
        onClick={() => setDrawerOpened(false)}
      >
        <List>
          <ListItem
            button
            component={RouterLink}
            to={'/wsb/wallet'}
            style={{ textAlign: 'center' }}
          >
            <ListItemText classes={{ primary: classes.menuItemText }} primary={'Wallet'} />
          </ListItem>
          <ListItem
            button
            component={RouterLink}
            to={'/wsb/send'}
            style={{ textAlign: 'center' }}
          >
            <ListItemText classes={{ primary: classes.menuItemText }} primary={'Send'} />
          </ListItem>
          <ListItem
            button
            component={RouterLink}
            to={'/wsb/receive'}
            style={{ textAlign: 'center' }}
          >
            <ListItemText classes={{ primary: classes.menuItemText }} primary={'Receive'} />
          </ListItem>
          <ListItem
            button
            component={RouterLink}
            to={'/contracts'}
            style={{ textAlign: 'center' }}
          >
            <ListItemText classes={{ primary: classes.menuItemText }} primary={'Contracts'} />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  </>
}
