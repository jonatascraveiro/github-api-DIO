import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import { FavoritosGithubType } from '../../types/favoritos'
import { RepositoriosGithubType } from '../../types/repositorios'

type ItemListaProps = {
  item: FavoritosGithubType | RepositoriosGithubType
}

const ItemLista: React.FC<ItemListaProps> = ({ item }) => {
  return (
    <Col className="mb-3" lg={3} md={4} sm={6} xs={12}>
      <Card>
        <Card.Header as="h5">{item.name}</Card.Header>
        <Card.Body>
          <Card.Title style={{ height: '2em' }} className="mb-4 text-start">
            {item.full_name}
          </Card.Title>
          <Card.Text>
            <ul>
              <li>Numero de forks: {item.forks_count}</li>
              <li>Numero de acompanhamentos: {item.watchers_count}</li>
              <li>Numero de issues/questões abertas: {item.open_issues}</li>
            </ul>
          </Card.Text>
          <p>Linguagem: {item.language}</p>
          <a href={item.html_url} rel="noopener noreferrer" target="_blank">
            <Button>Link do repositório</Button>
          </a>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default ItemLista
