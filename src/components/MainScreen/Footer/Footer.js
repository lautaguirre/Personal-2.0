import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

import './Footer.scss';

library.add(faArrowUp);

class Footer extends Component {
  render() {
    return (
      <Container fluid={true} className='footer-section center' >
        <Row >
          <Col lg={12} className='center' >
            <h4>Thanks for reading!</h4>
            <a href='#home' className='center shadow' >
              <FontAwesomeIcon icon={faArrowUp}  />
            </a>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Footer;