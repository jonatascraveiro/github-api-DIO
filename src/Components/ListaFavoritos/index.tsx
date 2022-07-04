import React from 'react'
import { Row } from 'react-bootstrap'
import { FavoritosGithubType } from '../../types/favoritos'
import ItemLista from '../ItemLista'

import { Container } from './styles'

type ListaFavoritosType = {
  favoritos: FavoritosGithubType[]
}

const ListaFavoritos: React.FC<ListaFavoritosType> = ({ favoritos }) => {
  return (
    <Container>
      <Row>
        {favoritos.map((favorito) => {
          return <ItemLista item={favorito} key={favorito.id} />
        })}
      </Row>
    </Container>
  )
}

export default ListaFavoritos
