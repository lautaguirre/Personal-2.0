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
            <Col xs={2} xsOffset={5} className='aboutHeader' >
              <div className='center' >
                <Image className='shadow' src={avatar} circle responsive />
              </div>
            </Col>
          </Row>

          <Row className="show-grid center">
            <Col xs={9} >
              <ListGroup className='shadow'>

                <ListGroupItem>
                    <Row className="show-grid center">
                      <Col xs={2} className='hideOnTablet' >
                        <FontAwesomeIcon icon={faUserCircle} size="5x" />
                      </Col>
                      <Col xs={10} >
                        <h3>Personal information </h3>
                        <hr />
                        <ul>
                          <li><strong>Name:</strong> Lautaro Nahuel</li>
                          <hr />
                          <li><strong>Lastname:</strong> Aguirre</li>
                        </ul>
                      </Col>
                    </Row>
                </ListGroupItem>

                <ListGroupItem>
                    <Row className="show-grid center">
                      <Col xs={2} className='hideOnTablet' >
                        <FontAwesomeIcon icon={faGraduationCap} size="5x"  />
                      </Col>
                      <Col xs={10} >
                        <h3>Education</h3>
                        <hr />
                        <ul>
                          <li>
                            <strong>Higschool:</strong>  San Juan Bautista de La Salle Institute
                            (Economics and Management of Organizations)
                          </li>
                          <hr />
                          <li>
                            <strong>College:</strong> Attending studies in Business Administration
                            at Rosario's National University.
                          </li>
                        </ul>
                      </Col>
                    </Row>
                </ListGroupItem>

                <ListGroupItem>
                    <Row className="show-grid center">
                      <Col xs={2} className='hideOnTablet' >
                        <FontAwesomeIcon icon={faBriefcase} size="5x"  />
                      </Col>
                      <Col xs={10} >
                      <h3>Work experience</h3>
                        <hr />
                        <ul>
                          <li>
                            Employee at <strong>“Park City Mountain Resort”</strong> located in Utah, United States for 5 months.
                            Occupied positions as cashier, busser, bartender and barista.
                          </li>
                          <hr />
                          <li>
                            Season employee at <strong>“Falabella Retail”</strong> at Rosario, Santa Fe, Argentina.
                          </li>
                          <hr />
                          <li>
                            My own freelance projects, which you can see at the <a href='#portfolio' ><u>PORTFOLIO</u></a> section.
                          </li>
                        </ul>
                      </Col>
                    </Row>
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
