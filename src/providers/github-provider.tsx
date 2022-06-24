import { GithubContext } from './../context/github'
import { FC, ReactNode, useCallback, useState } from 'react'
import api from '../services/api'
import { FavoritosGithubType } from '../types/favoritos'
import { RepositoriosGithubType } from '../types/repositorios'
import { UsuarioGithubType } from '../types/usuario'

type GithubProviderProps = {
  children: ReactNode
}

type GitHubState = {
  hasUser: boolean
  loading: boolean
  usuario: UsuarioGithubType | null
  repositorios: RepositoriosGithubType[]
  favoritos: FavoritosGithubType[]
}
const GithubProvider: FC<GithubProviderProps> = ({ children }) => {
  const [githubState, setGithubState] = useState<GitHubState>({
    hasUser: false,
    loading: false,
    usuario: null,
    repositorios: [],
    favoritos: [],
  })

  const getUsuario = (nome_usuario: string) => {
    setGithubState((prevState) => ({
      ...prevState,
      loading: !prevState.loading,
    }))

    api
      .get(`users/${nome_usuario}`)
      .then(({ data }: { data: UsuarioGithubType }) => {
        console.log(data)
        setGithubState((prevState) => ({
          ...prevState,
          hasUser: true,
          usuario: data,
        }))
      })
      .finally(() => {
        setGithubState((prevState) => ({
          ...prevState,
          loading: !prevState.loading,
        }))
      })
  }

  const getUsuarioRepositorios = (nome_usuario: string) => {
    api.get(`users/${nome_usuario}/repos`).then(({ data }) => {
      console.log('data: ' + JSON.stringify(data))
      setGithubState((prevState) => ({
        ...prevState,
        repositorios: data,
      }))
    })
  }

  const getUsuarioFavoritos = (nome_usuario: string) => {
    api.get(`users/${nome_usuario}/starred`).then(({ data }) => {
      console.log('data: ' + JSON.stringify(data))
      setGithubState((prevState) => ({
        ...prevState,
        favoritos: data,
      }))
    })
  }

  const contextValue = {
    githubState,
    getUsuario: useCallback(
      (nome_usuario: string) => getUsuario(nome_usuario),
      []
    ),
    getUsuarioRepositorios: useCallback(
      (nome_usuario: string) => getUsuarioRepositorios(nome_usuario),
      []
    ),
    getUsuarioFavoritos: useCallback(
      (nome_usuario: string) => getUsuarioFavoritos(nome_usuario),
      []
    ),
  }

  return (
    <GithubContext.Provider value={contextValue}>
      {children}
    </GithubContext.Provider>
  )
}

export default GithubProvider
