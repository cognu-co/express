import { Router, Route } from 'electron-router-dom'

import { CartoonsPage } from './pages/Cartoons'
import { Default } from './pages/layouts/default'
import { ServicesAvailablePage } from './pages/welcome'

export function Routes() {
  return (
    <Router
      main={
        <Route path="/" element={<Default />}>
          <Route path="/" element={<ServicesAvailablePage />} />
          <Route path="/services/cartoons" element={<CartoonsPage />} />
        </Route>
      }
    />
  )
}
