import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Ce_footer = () => {
  return (
    <div>
       <Container>
      <Row>
        <Col sm={8}>sm=8</Col>
        <Col sm={4}>sm=4</Col>
      </Row>
      <Row>
        <Col sm>sm=true</Col>
        <Col sm>sm=true</Col>
        <Col sm>sm=true</Col>
      </Row>
    </Container>
    </div>
  )
}

export default Ce_footer