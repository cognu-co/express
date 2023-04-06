import { Text, Heading } from '@cognu-ui/react'

import { ServicesContainer, Service } from './styles'

import rainPreview from '../../assets/reports-service.png'

export function ServicesAvailablePage() {
  return (
    <ServicesContainer>
      <main>
        <Service to="/services/service-point">
          <img draggable={false} src={rainPreview} alt="parking illustration" />
          <div>
            <Heading as="strong">Ponto de Atendimento</Heading>
          </div>
        </Service>
        <Service to="/services/cartoons">
          <img draggable={false} src={rainPreview} alt="parking illustration" />
          <div>
            <Heading as="strong">Manager</Heading>
            <Text>Ponto de Gerenciamento</Text>
          </div>
        </Service>
      </main>
    </ServicesContainer>
  )
}
