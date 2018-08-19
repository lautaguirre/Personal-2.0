import React, { Component } from 'react';

import { Grid, Col, Row, Image } from 'react-bootstrap';

import bootstrapSvg from '../../assets/images/bootstrap.svg';
import jquerySvg from '../../assets/images/jquery.svg';
import jsonSvg from '../../assets/images/json.svg';
import mySqlSvg from '../../assets/images/mysql.svg';

import './ProgrammingSection.scss';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faJs, faHtml5, faCss3Alt, faPhp } from '@fortawesome/free-brands-svg-icons'
import { faCodeBranch, faSyncAlt } from '@fortawesome/free-solid-svg-icons';

library.add(faReact, faJs, faHtml5, faCss3Alt, faPhp, faCodeBranch, faSyncAlt);

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
            <Col xs={2} className='text-center' >
              <FontAwesomeIcon icon={faHtml5} size='5x' />
              <h4>HTML5</h4>
            </Col>
            <Col xs={2} className='text-center' >
              <FontAwesomeIcon icon={faCss3Alt} size='5x' />
              <h4>CSS3</h4>
            </Col>
            <Col xs={2} className='text-center' >
              <FontAwesomeIcon icon={faJs} size='5x' />
              <h4>Javascript</h4>
            </Col>
            <Col xs={2} className='text-center' >
              <FontAwesomeIcon icon={faPhp} size='5x' />
              <h4>PHP</h4>
            </Col>
          </Row>

          <Row className="show-grid center">
            <Col xs={12} className='center' >
              <div >
                <h2>Frameworks and Tools</h2>
              </div>
            </Col>
          </Row>

          <Row className="show-grid center">
            <Col xs={2} className='text-center' >
              <div className='center' >
                <Image src={jsonSvg} responsive />
              </div>
              <h4>JSON</h4>
            </Col>
            <Col xs={2} className='text-center' >
              <FontAwesomeIcon icon={faSyncAlt} size='5x' />
              <h4>AJAX</h4>
            </Col>
            <Col xs={2} className='text-center' >
              <FontAwesomeIcon icon={faCodeBranch} size='5x' />
              <h4>Git</h4>
            </Col>
            <Col xs={2} className='text-center' >
              <div className='center' >
                <Image src={bootstrapSvg} responsive />
              </div>
              <h4>Bootstrap</h4>
            </Col>
          </Row>
          <Row className="show-grid center">
            <Col xs={2} className='text-center' >
              <div className='center' >
                <Image src={mySqlSvg} responsive />
              </div>
              <h4>MySQL</h4>
            </Col>
            <Col xs={3} className='text-center' >
              <FontAwesomeIcon icon={faReact} size='5x' />
              <h4>ReactJs</h4>
            </Col>
            <Col xs={2} className='text-center' >
              <div className='center' >
                <Image src={jquerySvg} responsive />
              </div>
              <h4>JQuery</h4>
            </Col>
          </Row>
        </div>
      </Grid>
    );
  }
}

export default ProgrammingSection;