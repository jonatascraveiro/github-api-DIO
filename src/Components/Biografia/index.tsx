import React from 'react'
import { Col, Image, Row, Stack } from 'react-bootstrap'
import useGithub from '../../hooks/github-hooks'

import { Container } from './styles'

const Biografia: React.FC = () => {
  const { githubState } = useGithub()
  const { usuario } = githubState
  return (
    <Container>
      <Row className="justify-content-start">
        <Col xs={12} md={2}>
          <Image
            roundedCircle
            width="90%"
            alt="Foto do perfil"
            src={usuario?.avatar_url}
          />
        </Col>
        <Col xs={12} md={3}>
          <Stack gap={4} className=" mx-auto">
            <h1 className="text-capitalize">{usuario?.name}</h1>
            <div>
              <b>Nome de usuário: </b> {usuario?.name}
            </div>
            <div>
              <b>Empresa: </b>
              {usuario?.company ?? 'Não possui empresa'}
            </div>
            <div>
              <b>Localização: </b> {usuario?.location ?? 'Não informado'}
            </div>
            <Row className="text-center">
              <Col>
                <h5>Seguidores</h5>
                <p>{usuario?.followers}</p>
              </Col>
              <Col>
                <h5>Seguindo</h5>
                <p>{usuario?.following}</p>
              </Col>
              <Col>
                <h5>Gist</h5>
                <p>{usuario?.public_gists}</p>
              </Col>
              <Col>
                <h5>Repositórios</h5>
                <p>{usuario?.public_repos}</p>
              </Col>
            </Row>
          </Stack>
        </Col>
      </Row>
    </Container>
  )
}

export default Biografia
