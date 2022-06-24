import React, { BaseSyntheticEvent, useEffect, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import useGithub from '../../hooks/github-hooks'

import { Container } from './styles'

const Header: React.FC = () => {
  const { getUsuario } = useGithub()
  const [nomeUsuario, setNomeUsusario] = useState('jonatascraveiro')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    getUsuario(nomeUsuario)
  }
  useEffect(() => {
    getUsuario(nomeUsuario)
  }, [])

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Row className="align-items-center py-3 m-auto">
          <Col className="col-11">
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Informe o nome do usuario"
                onChange={(e: BaseSyntheticEvent) => {
                  setNomeUsusario(e.target.value)
                }}
              />
            </Form.Group>
          </Col>
          <Col className="col-1">
            <Form.Group className="mb-3">
              <Button
                variant="primary"
                disabled={nomeUsuario.trim().length == 0}
                className="rounded-3"
                type="submit"
              >
                Buscar
              </Button>
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </Container>
  )
}

export default Header
