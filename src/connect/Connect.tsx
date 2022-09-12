import React, { useCallback, useEffect } from 'react'

import Typography from '@mui/material/Typography'
import { MainButton } from '../shared/StyledComponents'
import { useHistory, useLocation } from 'react-router'
import useConnector from './useConnector'
import shallow from 'zustand/shallow'
import { isRLoginConnected, rLogin } from './rLogin'
import Loading from '../shared/Loading'

const Connect = () => {
  const history = useHistory()
  const location = useLocation<any>()

  const { from } = location.state || { from: { pathname: '/wsb/wallet' } }

  const [connect, disconnect, isLoading] = useConnector(
    (state) => [state.connect, state.disconnect, state.isLoading],
    shallow
  )

  const handleConnect = useCallback(async () => {
    try {
      const { provider, disconnect } = await rLogin.connect()

      connect(provider, disconnect).then(() => {
        history.replace(from)

        // TODO: remove this line once the rLogin bug are solved
        localStorage.removeItem('WEB3_CONNECT_CACHED_PROVIDER')
      })
    } catch (error) {
      console.error('handleConnect error:', error)
      disconnect()
    }
  }, [connect, disconnect, from, history])

  useEffect(() => {
    if (isRLoginConnected()) {
      handleConnect()
    }
  }, [handleConnect])

  return (
    <>
      {!isLoading && <>
        <Typography data-testid="title" variant="h1" component="h1">
          rBench
        </Typography>
        <Typography data-testid="subtitle" variant="h2" component="h2">
          The workbench for RSK
        </Typography>
        <div
          style={{
            display: 'flex',
            marginTop: 24
          }}
        >
          <MainButton
            variant="contained"
            color="primary"
            onClick={handleConnect}
            data-testid="connect-button"
          >
            Connect your wallet
          </MainButton>
        </div>
      </>}
      <Loading isLoading={isLoading} />
    </>
  )
}

export default Connect
