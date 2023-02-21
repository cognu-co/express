import { Text, Heading } from '@cognu-ui/react'

import { ServicesContainer, Service } from './styles'

import rainPreview from '../../assets/reports-service.png'

export function ServicesAvailablePage() {
  return (
    <ServicesContainer>
      <main>
        <Service to="/services/cartoons">
          <img draggable={false} src={rainPreview} alt="parking illustration" />

          <div>
            <Heading as="strong">Cartões</Heading>
            <Text>Ponto de gerenciamento dos cartões</Text>
          </div>
        </Service>
      </main>
    </ServicesContainer>
  )
}
