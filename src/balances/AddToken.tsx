import React, { useState } from 'react'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import AddIcon from '@mui/icons-material/AddCircle'
import DialogTitle from '@mui/material/DialogTitle'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import { MainLink } from '../shared/StyledComponents'
import { Button, DialogActions, IconButton, InputAdornment, TextField } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import useConnector from '../connect/useConnector'
import { ENetwork } from '../connect/rLogin'
import { tokensMetadataMainnet, tokensMetadataTestnet } from '../shared/tokenMetadata'
import shallow from 'zustand/shallow'
import { fetchTokenBalance } from '../shared/utils'
import tokensStore from './tokensStore'

export interface DialogTitleProps {
    id: string;
    children?: React.ReactNode;
    onClose: () => void;
}

const DialogTitleWithCloseButton = (props: DialogTitleProps) => {
  const { children, onClose, ...other } = props

  return (
      <DialogTitle sx={{ m: 0, p: 2, textAlign: 'center', fontWeight: 'bold' }} color="primary" {...other}>
        {children}
        {onClose
          ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500]
            }}
          >
            <CloseIcon />
          </IconButton>
            )
          : null}
      </DialogTitle>
  )
}

interface IAddTokenProps {
    onComplete?: (tokenAddress: string) => void
}

const AddToken: React.FC<IAddTokenProps> = ({ onComplete }) => {
  const [open, setOpen] = useState(false)
  const [customToken, setCustomToken] = useState('')
  const [customTokenError, setCustomTokenError] = useState<string | null>(null)
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'))
  const [signer, network, account] = useConnector(state => [state.signer, state.network, state.account], shallow)
  const tokensMetadata = network === ENetwork.RSKMainnet ? tokensMetadataMainnet : tokensMetadataTestnet

  const [tokensStored, setTokensStored] = useState<string[]>([])

  const tokensList = Object.entries(tokensMetadata).filter(([key]) => !tokensStored.includes(key))

  const handleClickOpen = () => {
    setTokensStored(tokensStore(network ?? ENetwork.NotSupported).getAll())
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleComplete = async (tokenAddress: string, validate?: boolean) => {
    if (validate) {
      if (!signer || !account) return

      try {
        await fetchTokenBalance(signer, tokenAddress, account)
      } catch {
        setCustomTokenError('Invalid token address')
        return
      }
    }

    if (onComplete) {
      onComplete(tokenAddress)
    }
    setOpen(false)
    setCustomTokenError(null)
    setCustomToken('')
  }

  return (
    <>
      <MainLink component="button" onClick={handleClickOpen}>add token</MainLink>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        fullWidth={true}
        maxWidth={fullScreen ? false : 'xs'}
        onClose={handleClose}
        aria-labelledby="add-token-dialog-title"
      >
        <DialogTitleWithCloseButton id="add-token-dialog-title" onClose={handleClose}>
            Add token
        </DialogTitleWithCloseButton>
        <DialogContent style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {tokensList.map(([key, info]) => (
                <Button
                    key={`token-button-${key}`}
                    variant="outlined"
                    onClick={() => handleComplete(key)}>
                    {info.symbol} Token
                </Button>
            ))}
        </DialogContent>
        <DialogActions style={{ padding: 20 }}>
            <TextField
                variant="outlined"
                value={customToken}
                placeholder="Custom address"
                error={!!customTokenError}
                helperText={customTokenError}
                onChange={(event) => {
                  setCustomToken(event.target.value)
                  setCustomTokenError(null)
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="add token"
                            onClick={() => handleComplete(customToken, true)}
                            edge="end"
                            style={{ marginRight: 0 }}
                        >
                            <AddIcon />
                        </IconButton>
                    </InputAdornment>
                  )
                }}
            />
        </DialogActions>
      </Dialog>
    </>
  )
}

export default AddToken
