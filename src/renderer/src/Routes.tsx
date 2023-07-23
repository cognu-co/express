import { Router, Route } from 'electron-router-dom'

import { Default } from './pages/layouts/default'
import { ServicesAvailablePage } from './pages/welcome'
import { LoginPage } from './pages/login'
import { ServicePointPage } from './pages/services/service-point'

export function Routes() {
  return (
    <Router
      main={
        <Route path="/" element={<Default />}>
          <Route path="/" element={<LoginPage />} />
          <Route path="/welcome" element={<ServicesAvailablePage />} />
          <Route path="/services/service-point" element={<ServicePointPage />} />
        </Route>
      }
    />
  )
}
