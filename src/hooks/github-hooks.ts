import { GithubContextProps } from './../context/github'
import { useContext } from 'react'
import { GithubContext } from '../context/github'

const useGithub = () => {
  const {
    githubState,
    getUsuario,
    getUsuarioRepositorios,
    getUsuarioFavoritos,
  } = useContext(GithubContext) as GithubContextProps

  return {
    githubState,
    getUsuario,
    getUsuarioRepositorios,
    getUsuarioFavoritos,
  }
}

export default useGithub
