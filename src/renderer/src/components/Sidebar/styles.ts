import { styled, Text } from '@cognu-ui/react'

export const SidebarContainer = styled('aside', {
  width: 760,

  '> ul': {
    background: '$white',
    marginTop: '$4'
  }
})

export const Client = styled('li', {
  height: '40px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',

  cursor: 'pointer',
  borderBottom: '1px solid rgba(0, 0, 0, 0.125)',

  '&:hover': {
    boxShadow: ''
  },

  [`${Text}`]: {
    fontWeight: 500
  },

  '> div': {
    width: '200px',
    padding: '$1 $2'
  }
})
