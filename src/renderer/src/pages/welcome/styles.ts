import { Link } from 'react-router-dom'
import { styled } from '@cognu-ui/react'

export const ServicesContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: 'calc(100vh - 70px)',

  '@media (min-width: 768px)': {
    flexDirection: 'column',
    justifyContent: 'center'
  },

  '> main': {
    maxWidth: 600,
    margin: '0 auto',
    display: 'flex',
    gap: '$2'
  }
})

export const Service = styled(Link, {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  textAlign: 'center',

  height: '350px',
  width: '500px',
  padding: '$1',
  paddingTop: '$3',
  borderRadius: '$md',

  border: '2px solid $white',
  transition: 'all 0.2s ease-in-out',
  textDecoration: 'none',

  backgroundColor: '$white',
  color: '$gray900',

  '&:hover': {
    background: '$blue100',
    border: '2px solid $blue700'
  },

  '> div': {
    marginTop: '$2'
  },

  img: {
    width: '240px',
    height: '240px',
    objectFit: 'contain'
  }
})
