import React, { Component } from 'react';

import { Grid, Col, Row, ProgressBar } from 'react-bootstrap';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'

import './LanguagesSection.scss';

library.add(faComments, faChevronCircleRight);

class LanguagesSection extends Component {
  render() {

    let spanish = 100;
    let english = 85;
    let portuguese = 85;

    return (
      <Grid>
        <div id='languages' className='languages' >

          <Row className="show-grid">
            <Col xs={12} className='center' >
              <div >
                <h2>Languages &nbsp;<FontAwesomeIcon icon={faComments} /></h2>
              </div>
            </Col>
          </Row>

          <Row className="show-grid center">
            <Col xs={12} >
              <h3>Spanish &nbsp;<FontAwesomeIcon icon={faChevronCircleRight} />&nbsp; Native</h3>
              <ProgressBar now={spanish} label={`${spanish}%`} />
              <h3>English &nbsp;<FontAwesomeIcon icon={faChevronCircleRight} />&nbsp; First Certificate English</h3>
              <ProgressBar now={english} label={`${english}%`} />
              <h3>Portuguese &nbsp;<FontAwesomeIcon icon={faChevronCircleRight} />&nbsp; 2 years living in Brazil</h3>
              <ProgressBar now={portuguese} label={`${portuguese}%`} />
            </Col>
          </Row>

        </div>
      </Grid>
    );
  }
}

export default LanguagesSection;
