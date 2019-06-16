import React, { Component } from 'react';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';
import { faGraduationCap, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

import About from './About/About';
import Languages from './Languages/Languages';
import Portfolio from './Portfolio/Portfolio';

library.add(faGraduationCap, faBriefcase);

const aboutData = [
  {
    icon: 'faGraduationCap',
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
    icon: 'faBriefcase',
    header: 'Work experience',
    list: [
      {
        itemHeader: 'ReactJs Developer At Accelone (03/2019 - Present)',
        itemText: `Part of the Front-end team as an independent contractor in a project for a United States client
          in the insurances industry using ReactJS + Redux.`,
      },
      {
        itemHeader: 'React, React Native & Node Developer at CIBA Servicios Sociales (10/2018 – 03/2019)',
        itemText: `Developed mobile (iOS and Android) and web apps required by a social services and veterinary company.
          Tech Stack: ReactJs, React Native, Node.js and MongoDB`,
      },
      {
        itemHeader: 'Full-Stack Developer at Francovigh S.A. (04/2018 – 10/2018)',
        itemText: `Part of the IT team at a metallurgical company, developing and maintaining the
          company's web system using PHP Yii MVC Framework, Javascript and Bootstrap.`,
      },
      {
        itemHeader: 'ReactJS Developer at United Virtualities (04/2018 – 06/2018)',
        itemText: `As an independent contractor I was part of the Front-End team in a project for a United
          States client using ReactJS + Redux.`,
      },
      {
        itemHeader: 'Full Stack Developer (07/2017 – 04/2018)',
        itemText: `Developing my own personal and freelance projects, which you can see at the PORTFOLIO section.
          Used tools such as HTML5, CSS3, SASS, Bootstrap 4, Javascript, jQuery, ReactJS, PHP,
          OOP, MVC, Ajax, JSON and MySQL along with Git and Agile Boards.`,
      },
      {
        itemHeader: 'Retail employee at “Falabella Retail S.A." (06/2017 – 07/2017)',
        itemText: `Located at Rosario, Santa Fe, Argentina. Season employee. Part of the Men's section
          team in charge of managing stock, making sales and helping clients.`,
      },
      {
        itemHeader: 'Barista at “Park City Mountain Resort” (12/2016 – 04/2017)',
        itemText: `Located in Utah, United States. Season employee.
          Occupied positions as cashier, busser, bartender and barista.`,
      },
    ]
  }
];

const languagesData = [
  {
    name: 'Spanish',
    percentage: 100,
    description: 'Native',
  },
  {
    name: 'English',
    percentage: 85,
    description: 'First Certificate English',
  },
  {
    name: 'Portuguese',
    percentage: 85,
    description: '2 years living in Brazil',
  },
];

const portfolioItems = [
  {
    title: 'Villa Martina Consultorios',
    titleLink: 'https://villamartinarosario.com',
    description: `This is a freelance project, it is about a website with a responsive design that deals with offices
    reservations by hours for certain kind of professionals. The users can login with a personal account
    and, with a calendar UI, check the offices availability and then select the dates and hours that they
    want to reserve the offices. It also counts with an admin panel where the person in charge can create,
    update or disable users. Admins can also query users information as well as the reservations per month.
    (I'm also planning to update this project using Laravel + ReactJs)`,
    techStack: [
      {
        name: 'Front-end',
        description: 'HTML5 and CSS3 with Bootstrap and Javascript with jQuery',
      },
      {
        name: 'Back-end',
        description: 'PHP',
      },
      {
        name: 'Database',
        description: 'MySQL',
      },
      {
        name: 'Libraries',
        description: 'Fullcalendar for the calendar UI and Moment.js for dates management.' ,
      }
    ],
    images: [
      'home',
      'userPanel',
      'adminPanel',
    ],
  },
  {
    title: 'This Website',
    titleLink: 'https://github.com/lautaguirre/Personal-2.0',
    description: `This serves as my CV and a simple demo of what I can do in the Front-End, feel free to check the responsive design. And
    if you want to take a look at the source code you can do it with the link at the title`,
    techStack: [
      {
        name: 'ReactJs',
      },
      {
        name: 'Webpack',
      },
      {
        name: 'Bootstrap',
      },
      {
        name: 'Sass',
      }
    ],
  },
];

class DashboardScreen extends Component {
  render() {
    return (
      <Container fluid>
        <Row className="dashboard-screen-container">
          <Col xs={12} md={4}>
            <h2>About</h2>
            <ListGroup className="shadow">
              {aboutData.map(item => <About key={item.header} data={item} />)}
            </ListGroup>
          </Col>

          <Col xs={12} md={4}>
            <h2>Languages</h2>
            <ListGroup className="shadow">
              {languagesData.map((item, idx) => <Languages key={item.name} data={item} lastItem={idx + 1 === languagesData.length} />)}
            </ListGroup>
          </Col>

          <Col xs={12} md={4}>
            <h2>Portfolio</h2>
            <ListGroup className="shadow">
              <Portfolio data={portfolioItems} />
            </ListGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default DashboardScreen;
