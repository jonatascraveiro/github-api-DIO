import React from 'react'
import { Col, Image, Row, Stack } from 'react-bootstrap'

import { Container } from './styles'

const Biografia: React.FC = () => {
  return (
    <Container>
      <Row className="justify-content-start">
        <Col xs={12} md={2}>
          <Image
            roundedCircle
            width="90%"
            alt="Foto do perfil"
            src="https://avatars.githubusercontent.com/u/29283919?v=4"
          />
        </Col>
        <Col xs={12} md={3}>
          <Stack gap={4} className=" mx-auto">
            <h1>Jonatas Craveiro</h1>
            <div>
              <b>Nome de usuário: </b> jonatascraveiro
            </div>
            <div>
              <b>Empresa: </b> Empresa do Jonatas
            </div>
            <div>
              <b>Localização: </b> Brasil
            </div>
            <Row className="text-center">
              <Col>
                <h5>Seguidores</h5>
                <p>38</p>
              </Col>
              <Col>
                <h5>Seguindo</h5>
                <p>38</p>
              </Col>
              <Col>
                <h5>Gist</h5>
                <p>38</p>
              </Col>
              <Col>
                <h5>Repositórios</h5>
                <p>38</p>
              </Col>
            </Row>
          </Stack>
        </Col>
      </Row>
    </Container>
  )
}

export default Biografia
