import React, { Component } from 'react';

import { Grid, Col, Row } from 'react-bootstrap';

import './ContactSection.scss';

import Obfuscate from 'react-obfuscate'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

library.add(faLinkedin, faEnvelope);

class ContactSection extends Component {
  render() {
    return (
      <Grid className='contact' >

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

      </Grid>
    );
  }
}

export default ContactSection;
