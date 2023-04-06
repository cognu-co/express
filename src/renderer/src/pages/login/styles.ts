import { Heading, Text, styled, TextInput, Button } from '@cognu-ui/react'

export const Container = styled('div', {
  width: '100%',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
})

export const Cover = styled('main', {
  maxWidth: 460,
  width: '100%',
  margin: '0 auto',
  padding: '$0 $4'
})

export const Header = styled('div', {
  '.separator': {
    fontSize: '14px',
    color: '#a8a8b3',

    margin: '32px 0',
    display: 'flex',
    alignItems: 'center',

    '&::before': {
      content: '',
      flex: 1,
      height: '1px',
      background: '#a8a8b3',
      marginRight: '16px'
    },

    '&::after': {
      content: '',
      flex: 1,
      height: '1px',
      background: '#a8a8b3',
      marginLeft: '16px'
    }
  },

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '$2',
  marginBottom: '$12',

  [`> ${Heading}`]: {
    lineHeight: '$base'
  },

  [`> ${Text}`]: {
    color: '$gray200',
    marginBottom: '$6'
  }
})

export const Form = styled('div', {
  marginTop: '$6',
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',

  label: {
    display: 'flex',
    flexDirection: 'column',
    gap: '$2',

    [`> ${Text}`]: {
      fontWeight: '500'
    }
  },

  [`${Button}`]: {
    background: '$blue600',

    [`${Text}`]: {
      color: '$white'
    }
  }
})

export const FormError = styled(Text, {
  color: '#f75a68'
})

export const PhoneBox = styled('div', {
  display: 'flex',
  gap: '$2',
  alignItems: 'center',

  [`> ${TextInput}`]: {
    flex: 1
  }
})
