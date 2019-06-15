import React, { Component } from 'react';
import { Col, Container, ListGroup } from 'react-bootstrap';
import { faGraduationCap, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

import About from './About/About';

library.add(faGraduationCap, faBriefcase);

const aboutData = [
  {
    icon: faGraduationCap,
    header: 'Education',
    list: [
      {
        itemHeader: 'Higschool',
        itemText: 'San Juan Bautista de La Salle Institute (Economics and Management of Organizations).',
      },
      {
        itemHeader: 'College',
        itemText: 'Attending studies in Business Administration at Rosario\'s National University.',
      },
    ]
  },
  {
    icon: faBriefcase,
    header: 'Work experience',
    list: [
      {
        itemHeader: 'ReactJs Developer At Accelone (03/2019 - Present)',
        itemText: (
          <span>
            Part of the Front-end team as an independent contractor in a project for a United States client
            in the insurances industry using <strong>ReactJS + Redux.</strong>
          </span>
        ),
      },
      {
        itemHeader: 'React, React Native & Node Developer at CIBA Servicios Sociales (10/2018 – 03/2019)',
        itemText: (
          <span>
            Developed mobile (iOS and Android) and web apps required by a social services and veterinary company.
            Tech Stack: <strong>ReactJs, React Native, Node.js and MongoDB</strong>
          </span>
        ),
      },
      {
        itemHeader: 'Full-Stack Developer at Francovigh S.A. (04/2018 – 10/2018)',
        itemText: (
          <span>
            Part of the IT team at a metallurgical company, developing and maintaining the
            company's web system using <strong>PHP Yii MVC Framework, Javascript and Bootstrap.</strong>
          </span>
        ),
      },
      {
        itemHeader: 'ReactJS Developer at United Virtualities (04/2018 – 06/2018)',
        itemText: (
          <span>
            As an independent contractor I was part of the Front-End team in a project for a United
            States client using <strong>ReactJS + Redux.</strong>
          </span>
        ),
      },
      {
        itemHeader: 'Full Stack Developer (07/2017 – 04/2018)',
        itemText: (
          <span>
            Developing my own personal and freelance projects, which you can see at the <u>PORTFOLIO</u> section.<br />
            Used tools such as <strong>HTML5, CSS3, SASS, Bootstrap 4, Javascript, jQuery, ReactJS, PHP,
            OOP, MVC, Ajax, JSON and MySQL along with Git and Agile Boards.</strong>
          </span>
        ),
      },
      {
        itemHeader: 'Retail employee at “Falabella Retail S.A." (06/2017 – 07/2017)',
        itemText: (
          <span>
            Located at Rosario, Santa Fe, Argentina. Season employee. Part of the Men's section
            team in charge of managing stock, making sales and helping clients.
          </span>
        ),
      },
      {
        itemHeader: 'Barista at “Park City Mountain Resort” (12/2016 – 04/2017)',
        itemText: (
          <span>
            Located in Utah, United States. Season employee.
            Occupied positions as cashier, busser, bartender and barista.
          </span>
        ),
      },
    ]
  }
];

class DashboardScreen extends Component {
  render() {
    return (
      <Container className="dashboard-screen-container" fluid>
        <Col xs={6} className="pt-3">
          <h2 className="mt-0">About</h2>
          <ListGroup className="shadow">
            {aboutData.map(item => <About key={item.header} data={item} />)}
          </ListGroup>
        </Col>
      </Container>
    );
  }
}

export default DashboardScreen;
