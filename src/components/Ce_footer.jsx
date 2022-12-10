import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Ce_footer = () => {
  return (
    <div className='footer'>
       <Container>

      <Row className='footer-top'>
        <Col sm><h1>I'm the footer</h1></Col>
        <Col sm><ul className='footer-nav'>
          <li><a href="#about_us"> about us </a></li>
          <li><a href="#services"> services </a></li>
          <li><a href="#blogs"> blogs </a></li>
          </ul>
          </Col>
        <Col sm><p className='footer-info'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p></Col>
      </Row>
      <Row className='copyright'>
        <Col sm={12}><p className='copyright-info'>copyright first react website 2022</p></Col>
      </Row>
    </Container>
    </div>
  )
}

export default Ce_footer