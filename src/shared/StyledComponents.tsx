import { Container, Button, Link, LinkTypeMap } from '@mui/material'
import { OverridableComponent } from '@mui/material/OverridableComponent'
import { withStyles } from '@mui/styles'
import { styled } from '@mui/material/styles'

export const ContentWrapper = withStyles({
  root: {
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '30px'
  }
})(Container)

export const MainButton = withStyles({
  root: {
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: 12,
    paddingLeft: 40,
    paddingRight: 40,
    width: '100%',
    minHeight: '61px',
    fontWeight: 'bold',
    fontSize: '21px',
    textTransform: 'none'
  }
})(Button)

export const MainLink: OverridableComponent<LinkTypeMap<{}, 'a'>> = withStyles({
  root: {
    color: '#fff',
    boxShadow: 'none',
    lineHeight: '29px',
    fontWeight: 'bold',
    fontSize: '23px',
    textTransform: 'none',
    textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
  }
})(Link) as any

export const Row = withStyles({
  root: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    padding: 0
  }
})(Container)

export const Column = styled('div')({
  display: 'flex',
  maxWidth: 480,
  width: '100%',
  flexDirection: 'column',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '30px'
})

export const ContentInColumns = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  width: '100%',
  justifyContent: 'center',
  gap: '60px'
})
