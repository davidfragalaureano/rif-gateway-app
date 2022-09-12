import { Container, Typography } from '@mui/material'
import React, { useState } from 'react'
import shallow from 'zustand/shallow'
import useConnector from './connect/useConnector'
import { Column, MainLink } from './shared/StyledComponents'
import { getAddressExplorerLink, shortAddress } from './shared/utils'
import QRCode from 'react-qr-code'
import { withStyles } from '@mui/styles'

const QRWrapper = withStyles({
  root: {
    width: 240,
    height: 240,
    background: '#fff',
    padding: 20,
    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))'
  }
})(Container)

const LinksWrapper = withStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px'
  }
})(Container)

const Receive = () => {
  const [account, network] = useConnector(state => [state.account, state.network], shallow)

  const { canCopy, isCopying, handleCopy } = useCopy(account)
  const { canShare, isSharing, handleShare } = useShare('Account', account)

  return (
    <Column>
      <QRWrapper>
        <QRCode data-testid="account-qr" value={account ?? 'no-account'} size={200} />
      </QRWrapper>
      <LinksWrapper>
        <Typography data-testid="account-value" variant="h3" component="span">{shortAddress(account)}</Typography>
        {canCopy && <MainLink data-testid="account-copy" component="button" onClick={isCopying ? undefined : handleCopy}>{isCopying ? 'copied!' : 'copy'}</MainLink>}
        {canShare && <MainLink data-testid="account-share" component="button" onClick={isSharing ? undefined : handleShare}>{isSharing ? 'shared!' : 'share'}</MainLink>}
        <MainLink data-testid="explorer-account-link" href={getAddressExplorerLink(network, account) ?? '#'} target="_blank" rel="noopener noreferrer">explorer</MainLink>
      </LinksWrapper>
    </Column>
  )
}

export default Receive

const useCopy = (textToCopy?: string) => {
  const [isCopying, setIsCopying] = useState(false)

  const canCopy = !!navigator?.clipboard

  const handleCopy = () => {
    if (!canCopy) {
      return
    }

    setIsCopying(true)

    navigator.clipboard.writeText(textToCopy ?? '')

    setTimeout(() => {
      setIsCopying(false)
    }, 2000)
  }

  return {
    canCopy,
    isCopying,
    handleCopy
  }
}

const useShare = (title: string, textToShare?: string) => {
  const [isSharing, setIsSharing] = useState(false)

  const canShare = !!navigator.share

  const handleShare = async () => {
    if (!canShare) {
      return
    }

    setIsSharing(true)

    try {
      await navigator.share({
        title,
        text: textToShare
      })
    } catch (error) {
      console.error('user closed share')
    }

    setTimeout(() => {
      setIsSharing(false)
    }, 2000)
  }

  return {
    canShare,
    isSharing,
    handleShare
  }
}
