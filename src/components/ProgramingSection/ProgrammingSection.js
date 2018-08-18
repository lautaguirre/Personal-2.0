import React, { Component } from 'react';

import { Grid, Col, Row } from 'react-bootstrap';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'

import './ProgrammingSection.scss';

library.add(faComments, faChevronCircleRight);

class ProgrammingSection extends Component {
  render() {
    return (
      <Grid>
        <div id='programming' className='programming' >

          <Row className="show-grid">
            <Col xs={12} className='center' >
              <div >
                <h2>Programming Languages</h2>
              </div>
            </Col>
          </Row>

          <Row className="show-grid center">
            <Col xs={9} >

            </Col>
          </Row>

        </div>
      </Grid>
    );
  }
}

export default ProgrammingSection;