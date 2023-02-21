import { TextInput, Text } from '@cognu-ui/react'

import { SidebarContainer, Client } from './styles'

export function Sidebar() {
  return (
    <SidebarContainer>
      <header>
        <TextInput placeholder="Digite o nome do cliente" />
      </header>
      <ul>
        <Client>
          <div>
            <Text>00235406546567</Text>
          </div>

          <Text>Elias Garcia Alexandre</Text>
        </Client>
        <Client>
          <div>
            <Text>0345346MLA46</Text>
          </div>

          <Text>Júlia Rosa Garcia Mário</Text>
        </Client>
      </ul>
    </SidebarContainer>
  )
}
