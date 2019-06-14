import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { HashLink as Link } from 'react-router-hash-link';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

import './Footer.scss';

library.add(faArrowUp);

class Footer extends Component {
  scrollToTop = () => {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Container fluid={true} className='footer-section center' >
        <Row >
          <Col lg={12} className='center' >
            <h4>Thanks for reading!</h4>
            <Link className='center shadow' to="/" onClick={this.scrollToTop}>
              <FontAwesomeIcon icon={faArrowUp} />
            </Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Footer;
