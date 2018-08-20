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
                            <strong>Full-Stack Developer at Francovigh S.A. (04/2018 – Present)</strong><br />
                            Part of the IT team at a metallurgical company, developing and maintaining the
                            company's web system using <strong>PHP Yii MVC Framework, Javascript and Bootstrap.</strong>
                          </li>
                          <hr />
                          <li>
                            <strong>ReactJS Developer at United Virtualities (04/2018 – 06/2018)</strong><br />
                            As an independent contractor I was part of the Front-End team in a project for a United
                            States client using <strong>ReactJS + Redux.</strong>
                          </li>
                          <hr />
                          <li>
                            <strong>Full Stack Developer (07/2017 – 04/2018)</strong><br />
                            Developing my own personal and freelance projects, which you can see at the <a href='#portfolio' ><u>PORTFOLIO</u></a> section.<br />
                            Used tools such as <strong>HTML5, CSS3, SASS, Bootstrap 4, Javascript, jQuery, ReactJS, PHP,
                            OOP, MVC, Ajax, JSON and MySQL along with Git and Agile Boards.</strong>
                          </li>
                          <hr />
                          <li>
                            <strong>Retail employee at “Falabella Retail S.A." (06/2017 – 07/2017)</strong><br />
                            Located at Rosario, Santa Fe, Argentina. Season employee. Part of the Men's section
                            team in charge of managing stock, making sales and helping clients.
                          </li>
                          <hr />
                          <li>
                            <strong>Barista at “Park City Mountain Resort” (12/2016 – 04/2017)</strong><br />
                            Located in Utah, United States. Season employee.
                            Occupied positions as cashier, busser, bartender and barista.
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
