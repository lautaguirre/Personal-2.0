import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Obfuscate from 'react-obfuscate';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import './ContactSection.scss';

library.add(faLinkedin, faEnvelope);

class ContactSection extends Component {
  render() {
    return (
      <Container className='contact-section'>

          <Row >
            <Col xs={12} className='center' >
              <h2>Send me a message!</h2>
            </Col>
          </Row>

          <Row  >
            <Col xs={6} className='center' >
              <h3>E-mail</h3>
              <Obfuscate email="lauta.nahuel94@gmail.com" linkText='E-mail'>
                <FontAwesomeIcon icon={faEnvelope} size='5x' />
              </Obfuscate>
            </Col>
            <Col xs={6} className='center' >
              <h3>LinkedIn</h3>
              <a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/lautaguirre' >
                <FontAwesomeIcon icon={faLinkedin} size='5x' />
              </a>
            </Col>
          </Row>

      </Container>
    );
  }
}

export default ContactSection;
