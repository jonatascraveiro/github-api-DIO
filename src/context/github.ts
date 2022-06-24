import { createContext } from 'react'

import { FavoritosGithubType } from './../types/favoritos/index'
import { UsuarioGithubType } from './../types/usuario/index'
import { RepositoriosGithubType } from '../types/repositorios'

export type GithubContextProps = {
  githubState: {
    hasUser: boolean
    loading: boolean
    usuario: UsuarioGithubType | null
    favoritos: FavoritosGithubType[]
    repositorios: RepositoriosGithubType[]
  }
  getUsuario: (nomeUsuario: string) => void
  getUsuarioRepositorios: (nomeUsuario: string) => void
  getUsuarioFavoritos: (nomeUsuario: string) => void
}
export const GithubContext = createContext<GithubContextProps | null>(null)
