import { Link } from 'react-router-dom'
import { styled } from '@cognu-ui/react'

export const ServicesContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  height: 'calc(100vh - 70px)',

  '@media (min-width: 768px)': {
    flexDirection: 'column',
    justifyContent: 'center'
  },

  '> main': {
    maxWidth: 786,
    margin: '0 auto',
    display: 'flex',
    gap: '$3'
  }
})

export const Service = styled(Link, {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  textAlign: 'center',

  overflow: 'hidden',
  height: '250px',
  width: '500px',
  padding: '$2',
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
    width: '140px',
    height: '140px',
    objectFit: 'contain'
  }
})
