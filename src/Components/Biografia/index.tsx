import React from 'react'
import { Col, Image, Row, Stack } from 'react-bootstrap'
import useGithub from '../../hooks/github-hooks'

const Biografia: React.FC = () => {
  const { githubState } = useGithub()
  const { usuario } = githubState
  return (
    <Row className="justify-content-start">
      <Col xs={12} sm={12} md={3} lg={2} xl={2}>
        <Image
          style={{ maxWidth: '350px' }}
          roundedCircle
          width="90%"
          alt="Foto do perfil"
          src={usuario?.avatar_url}
        />
      </Col>
      <Col xs={12} sm={12} md={4} lg={6}>
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
          <Row className="text-md-center text-sm-start text-start">
            <Col xs={12} sm={6} md={6} lg={3}>
              <h5>Seguidores</h5>
              <p>{usuario?.followers}</p>
            </Col>
            <Col xs={12} sm={6} md={6} lg={3}>
              <h5>Seguindo</h5>
              <p>{usuario?.following}</p>
            </Col>
            <Col xs={12} sm={6} md={6} lg={3}>
              <h5>Gist</h5>
              <p>{usuario?.public_gists}</p>
            </Col>
            <Col xs={12} sm={6} md={6} lg={3}>
              <h5>Repositórios</h5>
              <p>{usuario?.public_repos}</p>
            </Col>
          </Row>
        </Stack>
      </Col>
    </Row>
  )
}

export default Biografia
