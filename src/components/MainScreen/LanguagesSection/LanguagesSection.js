import React, { Component } from 'react';
import { Container, Col, Row, ProgressBar } from 'react-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';

import './LanguagesSection.scss';

library.add(faComments, faChevronCircleRight);

class LanguagesSection extends Component {
  renderLanguages = (language) => {
    return (
      <div key={language.name}>
        <h3>
          {language.name}
          <span className='hideOnMobile'>
            &nbsp;
            <FontAwesomeIcon icon={faChevronCircleRight} />&nbsp;
            {language.description}
          </span>
        </h3>
        <ProgressBar now={language.percentage} label={`${language.percentage}%`} className='shadow' />
      </div>
    );
  }

  render() {
    const { data } = this.props;

    return (
      <Container>
        <div id='languages' className='languages-section' >
          <Row>
            <Col xs={12} className='center' >
              <h2 className="title mr-3">
                Languages
              </h2>
              <FontAwesomeIcon className="opacity-grey" icon={faComments} size="2x" />
            </Col>
          </Row>

          <Row className="center">
            <Col xs={12} >
              {data.map(this.renderLanguages)}
            </Col>
          </Row>

        </div>
      </Container>
    );
  }
}

export default LanguagesSection;
