import { globalCss } from '@cognu-ui/react'

export const appGlobalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    outline: 'none',
    boxSizing: 'border-box'
  },
  html: {
    overflow: 'hidden'
  },
  'ul li': {
    listStyle: 'none'
  }
})
