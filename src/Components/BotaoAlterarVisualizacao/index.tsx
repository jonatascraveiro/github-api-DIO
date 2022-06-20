import React from 'react'
import { Button, Stack } from 'react-bootstrap'

import { Container } from './styles'

const BotaoAlterarVisualizacao: React.FC = () => {
  return (
    <Container className="m-3">
      <Stack direction="horizontal" gap={5}>
        <Button>Repositórios</Button>
        <Button>Favoritos</Button>
      </Stack>
    </Container>
  )
}

export default BotaoAlterarVisualizacao
