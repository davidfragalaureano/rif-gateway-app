
import LinearProgress from '@mui/material/LinearProgress'
import React, { memo } from 'react'
import { withStyles, makeStyles } from '@mui/styles'

const BorderLinearProgress = withStyles((theme) =>
  ({
    root: {
      height: 5,
      borderRadius: 5
    },
    colorPrimary: {
      backgroundColor:
          theme.palette.grey[theme.palette.mode === 'light' ? 200 : 700]
    },
    bar: {
      borderRadius: 5,
      backgroundColor: '#1a90ff'
    }
  })
)(LinearProgress)

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 800,
    marginTop: 2.5,
    marginBottom: 2.5
  }
})

const Loading: React.FC<{ isLoading: boolean }> = memo(({ isLoading }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      {isLoading && <BorderLinearProgress variant="indeterminate" />}
      {!isLoading && <div style={{ height: 5 }} />}
    </div>
  )
})

export default Loading
