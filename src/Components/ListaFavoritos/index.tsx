import React from 'react'
import { Row } from 'react-bootstrap'
import { FavoritosGithubType } from '../../types/favoritos'
import ItemLista from '../ItemLista'

type ListaFavoritosType = {
  favoritos: FavoritosGithubType[]
}

const ListaFavoritos: React.FC<ListaFavoritosType> = ({ favoritos }) => {
  return (
    <Row>
      {favoritos.map((favorito) => {
        return <ItemLista item={favorito} key={favorito.id} />
      })}
    </Row>
  )
}

export default ListaFavoritos
