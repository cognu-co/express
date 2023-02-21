import { Routes } from './Routes'
import { appGlobalStyles } from './styles/global'

function App(): JSX.Element {
  appGlobalStyles()

  return <Routes />
}

export default App
