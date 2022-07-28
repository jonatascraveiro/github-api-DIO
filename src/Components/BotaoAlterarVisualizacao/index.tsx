import React, { useEffect, useState } from 'react'
import { Button, Stack } from 'react-bootstrap'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import useGithub from '../../hooks/github-hooks'
import ListaFavoritos from '../ListaFavoritos'
import ListaRepositorios from '../ListaRepositorios'

const BotaoAlterarVisualizacao: React.FC = () => {
  const { githubState, getUsuarioRepositorios, getUsuarioFavoritos } =
    useGithub()
  const [, setHasUserForSearchrepos] = useState(false)

  useEffect(() => {
    if (githubState?.usuario?.login) {
      getUsuarioRepositorios(githubState?.usuario?.login)
      getUsuarioFavoritos(githubState?.usuario?.login)
    }
    setHasUserForSearchrepos(githubState?.repositorios ? true : false)
  }, [githubState?.usuario?.login])
  // eslint-disable-next-line react-hooks/exhaustive-deps

  return (
    <div className="m-3">
      <Tabs>
        <TabList style={{ listStyleType: 'none' }} className="d-flex my-5 ps-0">
          <Tab>
            <Button>Repositórios</Button>
          </Tab>
          <Tab className="ms-5">
            <Button>Favoritos</Button>
          </Tab>
        </TabList>

        <TabPanel>
          <h1>Repositórios</h1>
          <ListaRepositorios repositorios={githubState.repositorios} />
        </TabPanel>
        <TabPanel>
          <h1>Favoritos</h1>
          <ListaFavoritos favoritos={githubState.favoritos} />
        </TabPanel>
      </Tabs>
      <Stack direction="horizontal" gap={5}></Stack>
    </div>
  )
}

export default BotaoAlterarVisualizacao
