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
        <div id='footer' >

          <Row className="show-grid">
            <Col lg={12} className='' >
              <h4>Thanks for reading!</h4>
              <a href='#home'>
                {/*<FontAwesomeIcon icon={faArrowUp} />*/}
              </a>
            </Col>
          </Row>

        </div>
      </Grid>
    );
  }
}

export default Footer;
