import React from 'react'
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from './assets/theme'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import Connect from './connect/Connect'
import Layout from './shared/Layout'
import { Column, ContentInColumns } from './shared/StyledComponents'

import Wallet from './Wallet'
import useConnector from './connect/useConnector'
import Send from './send/Send'
import Receive from './Receive'
import Balances from './balances/Balances'
import Services from './services/Services'

const App = () => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes />
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

const Routes = () => {
  const isConnected = useConnector((state) => state.isConnected)

  const basename = process.env.PUBLIC_URL ?? '/'

  return (
    <Router basename={basename}>
      <Switch>
        <Layout>
          <Route exact path="/connect">
            <Connect />
          </Route>
          <Route path="/wsb">
            <ContentInColumns>
              <Switch>
                <ConnectedRoute
                  exact
                  path="/wsb/wallet"
                  isConnected={isConnected}
                  component={Wallet}
                />
                <ConnectedRoute
                  exact
                  path="/wsb/send"
                  isConnected={isConnected}
                  component={Send}
                />
                <ConnectedRoute
                  exact
                  path="/wsb/receive"
                  isConnected={isConnected}
                  component={Receive}
                />
              </Switch>
              <Column>
                <Balances />
              </Column>
            </ContentInColumns>
          </Route>
          <ConnectedRoute
            exact
            path="/services"
            isConnected={isConnected}
            component={() => <Services />}
          />
        </Layout>
        <Route path="*">
          <Redirect to="/wsb/wallet" />
        </Route>
      </Switch>
    </Router>
  )
}

const ConnectedRoute: React.FC<{
  isConnected: boolean;
  exact: boolean;
  component: any;
  path: string;
}> = ({ isConnected, exact, path, component: Component }) => (
  <Route
    exact={exact}
    path={path}
    render={(props: any) =>
      <>
        {isConnected && <Component {...props} />}
        {!isConnected && <Redirect
          to={{
            pathname: '/connect',
            state: { from: props.location }
          }}
        />}
      </>
    }
  />
)

export default App
