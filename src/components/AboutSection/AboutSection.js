import React, { Component } from 'react';

import { Grid, Col, Row, Image, ListGroupItem, ListGroup } from 'react-bootstrap';

import avatar from '../../assets/images/avatar.png';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard, faGraduationCap, faBriefcase } from '@fortawesome/free-solid-svg-icons'

import './AboutSection.scss';

library.add(faAddressCard, faGraduationCap, faBriefcase);

class AboutSection extends Component {
  render() {
    return (
      <Grid>
        <div id='about' className='about'>

          <Row >
            <Col xs={12} className='center' >
              <h2>About</h2>
            </Col>
          </Row>

          <Row >
            <Col xs={12} xsHidden={true} className='center aboutHeader' >
              <Image width={165} height={165} className='shadow' src={avatar} circle responsive />
            </Col>
          </Row>

          <Row >
            <Col xs={12} >
              <ListGroup className='shadow'>

                <ListGroupItem>
                    <Row>
                      <Col xs={2} className='center' xsHidden={true} >
                        <FontAwesomeIcon icon={faAddressCard} size="5x" />
                      </Col>
                      <Col xs={10} >
                        <h4>Personal information </h4>
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
                    <Row >
                      <Col xs={2} className='center' xsHidden={true} >
                          <FontAwesomeIcon icon={faGraduationCap} size="5x" />
                      </Col>
                      <Col xs={10} >
                        <h4>Education</h4>
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
                    <Row >
                      <Col xs={2} className='center' xsHidden={true} >
                          <FontAwesomeIcon icon={faBriefcase} size="5x"  />
                      </Col>
                      <Col xs={10} >
                        <h4>Work experience</h4>
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
