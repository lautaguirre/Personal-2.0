import React, { Component } from 'react';
import { Container, Col, Row, Image, ListGroupItem, ListGroup } from 'react-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faBriefcase } from '@fortawesome/free-solid-svg-icons';

import avatar from '.././../../assets/images/avatar.png';

import './AboutSection.scss';

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
        itemHeader: 'React, React Native & Node Developer at CIBA Servicios Sociales (10/2018 – 4/2019)',
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
            Developing my own personal and freelance projects, which you can see at the <a href='#portfolio' ><u>PORTFOLIO</u></a> section.<br />
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

class AboutSection extends Component {
  renderAboutList = (section) => {
    const renderSectionItems = section.list.map((item, idx) => {
      return (
        <li key={item.itemHeader}>
          <strong>{item.itemHeader}</strong><br/>
          {item.itemText}
          {(idx + 1) === section.list.length ? null : <hr/>}
        </li>
      );
    });

    return (
      <ListGroupItem key={section.header}>
        <Row>
          <Col xs={2} className='center hideOnMobile'>
            <FontAwesomeIcon icon={section.icon} size="5x"  />
          </Col>
          <Col xs={10} >
            <h4>{section.header}</h4>
            <hr/>
            <ul>
              {renderSectionItems}
            </ul>
          </Col>
        </Row>
      </ListGroupItem>
    );
  }

  render() {
    return (
      <Container>
        <div id='about' className='about-section'>
          <Row>
            <Col xs={12} className='center' >
              <h2>About</h2>
            </Col>
          </Row>

          <Row>
            <Col xs={12} className='center aboutHeader hideOnMobile'>
              <Image width={165} height={165} className='shadow' src={avatar} roundedCircle fluid />
            </Col>
          </Row>

          <Row >
            <Col xs={12} >
              <ListGroup className='shadow'>
                {aboutData.map(this.renderAboutList)}
              </ListGroup>
            </Col>
          </Row>

        </div>
      </Container>
    );
  }
}

export default AboutSection;
