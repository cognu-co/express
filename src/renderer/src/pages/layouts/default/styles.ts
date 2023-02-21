import { styled } from '@cognu-ui/react'

export const DefaultContainer = styled('main', {
  height: '100vh',
  width: '100vw',
  display: 'flex',
  flexDirection: 'column',
  color: '$gray900',

  '> div': {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    maxHeight: '100vh'
  }
})
