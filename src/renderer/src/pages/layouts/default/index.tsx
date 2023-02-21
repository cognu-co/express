import { Box } from '@cognu-ui/react'
import { Outlet } from 'react-router-dom'

import { DefaultContainer } from './styles'

export function Default(): JSX.Element {
  return (
    <DefaultContainer>
      <Box>
        <div className="max-h-screen">
          {/* Onde vai ser inserido o conteúdo de cada pagina */}
          <Outlet />
        </div>
      </Box>
    </DefaultContainer>
  )
}
