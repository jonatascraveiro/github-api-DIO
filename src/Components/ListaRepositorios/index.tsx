import React from 'react'
import { Row } from 'react-bootstrap'
import ItemLista from '../ItemLista'

import { Container } from './styles'

const ListaRepositorios: React.FC = () => {
  return (
    <Container>
      <Row>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((key) => {
          return <ItemLista key={key} />
        })}
      </Row>
    </Container>
  )
}

export default ListaRepositorios
