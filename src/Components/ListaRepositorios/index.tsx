import React from 'react'
import { Row } from 'react-bootstrap'
import { RepositoriosGithubType } from '../../types/repositorios'
import ItemLista from '../ItemLista'

type ListaRepositoriosType = {
  repositorios: RepositoriosGithubType[]
}
const ListaRepositorios: React.FC<ListaRepositoriosType> = ({
  repositorios,
}) => {
  return (
    <Row>
      {repositorios.map((repositorio) => {
        return <ItemLista item={repositorio} key={repositorio.id} />
      })}
    </Row>
  )
}

export default ListaRepositorios
