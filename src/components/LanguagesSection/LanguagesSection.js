import React, { Component } from 'react';

import { Container, Col, Row, ProgressBar } from 'react-bootstrap';

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
      <Container>
        <div id='languages' className='languages' >
          <Row>
            <Col xs={12} className='center' >
                <h2>Languages &nbsp;<FontAwesomeIcon icon={faComments} /></h2>
            </Col>
          </Row>

          <Row className="center">
            <Col xs={12} >
              <h3>
                Spanish
                <span className='hideOnMobile'>
                  &nbsp;
                  <FontAwesomeIcon icon={faChevronCircleRight} />&nbsp;
                  Native
                </span>
              </h3>
              <ProgressBar now={spanish} label={`${spanish}%`} className='shadow' />

              <h3>
                English
                <span className='hideOnMobile'>
                  &nbsp;
                  <FontAwesomeIcon icon={faChevronCircleRight} />&nbsp;
                  First Certificate English
                </span>
              </h3>
              <ProgressBar now={english} label={`${english}%`} className='shadow' />

              <h3>
                Portuguese
                <span className='hideOnMobile'>
                  &nbsp;
                  <FontAwesomeIcon icon={faChevronCircleRight} />&nbsp;
                  2 years living in Brazil
                </span>
              </h3>
              <ProgressBar now={portuguese} label={`${portuguese}%`} className='shadow' />
            </Col>
          </Row>

        </div>
      </Container>
    );
  }
}

export default LanguagesSection;
