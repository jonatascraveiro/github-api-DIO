import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'

import { Container } from './styles'

const Header: React.FC = () => {
    return (
        <Container>
            <Form>
                <Row className="align-items-center py-3 m-auto">
                    <Col className="col-11">
                        <Form.Group className="mb-3">
                            <Form.Control
                                type="text"
                                placeholder="Informe o nome do usuario"
                            />
                        </Form.Group>
                    </Col>
                    <Col className="col-1">
                        <Form.Group className="mb-3">
                            <Button
                                variant="primary"
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
