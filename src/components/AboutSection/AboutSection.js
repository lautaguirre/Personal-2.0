import React, { Component } from 'react';

import { Grid, Col, Row, Image, ListGroupItem, ListGroup } from 'react-bootstrap';

import avatar from '../../assets/images/avatar.png';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faGraduationCap, faBriefcase } from '@fortawesome/free-solid-svg-icons'

import './AboutSection.scss';

library.add(faUserCircle,faGraduationCap, faBriefcase);

class AboutSection extends Component {
  render() {
    return (
      <Grid>
        <div id='about' className='about'>

          <Row className="show-grid">
            <Col xs={6} xsOffset={3} >
              <div className='center'>
                <h3>ABOUT</h3>
              </div>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={2} xsOffset={5} >
              <div className='aboutHeader center' >
                <Image className='shadow' src={avatar} circle responsive />
              </div>
            </Col>
          </Row>

          <Row className="show-grid center">
            <Col xs={9} >
              <ListGroup className='shadow'>

                <ListGroupItem>
                  <Grid>
                    <Row className="show-grid center">
                      <Col xs={2} >
                        <FontAwesomeIcon icon={faUserCircle} size="6x" />
                      </Col>
                      <Col xs={10} >
                        <h3>Personal information </h3>
                        <hr />
                        <ul>
                          <li><strong>Name:</strong> Lautaro Nahuel</li>
                          <li><strong>Lastname:</strong> Aguirre</li>
                        </ul>
                      </Col>
                    </Row>
                  </Grid>
                </ListGroupItem>

                <ListGroupItem>
                  <Grid>
                    <Row className="show-grid center">
                      <Col xs={2} >
                        <FontAwesomeIcon icon={faGraduationCap} size="6x"  />
                      </Col>
                      <Col xs={10} >
                        <h3>Education</h3>
                        <hr />
                        <ul>
                          <li>
                            <strong>Higschool:</strong>  San Juan Bautista de La Salle Institute
                            (Economics and Management of Organizations)
                          </li>
                          <li>
                            <strong>College:</strong> Attending studies in Business Administration
                            at Rosario's National University.
                          </li>
                        </ul>
                      </Col>
                    </Row>
                  </Grid>
                </ListGroupItem>

                <ListGroupItem>
                  <Grid>
                    <Row className="show-grid center">
                      <Col xs={2} >
                        <FontAwesomeIcon icon={faBriefcase} size="6x"  />
                      </Col>
                      <Col xs={10} >
                        lorem ipsum
                      </Col>
                    </Row>
                  </Grid>
                </ListGroupItem>

              </ListGroup>
            </Col>
          </Row>

        </div>
      </Grid>
    );
  }
}

export default AboutSection;
