import React, { Component } from 'react';

import { Grid, Col, Row } from 'react-bootstrap';

import './Footer.scss';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

library.add(faArrowUp);

class Footer extends Component {
  render() {
    return (
      <Grid fluid={true} className='footer center' >

        <Row >
          <Col lg={12} className='center' >
            <h4>Thanks for reading!</h4>
            <a href='#home' className='center' >
              <FontAwesomeIcon icon={faArrowUp}  />
            </a>
          </Col>
        </Row>

      </Grid>
    );
  }
}

export default Footer;
