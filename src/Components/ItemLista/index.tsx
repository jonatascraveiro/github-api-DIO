import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'

const ItemLista: React.FC = () => {
  return (
    <Col className="mb-3" lg={3} md={4} sm={6} xs={12}>
      <Card>
        <Card.Header as="h5">Nome do repositorio</Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <Button variant="primary">Link do repositrio</Button>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default ItemLista
