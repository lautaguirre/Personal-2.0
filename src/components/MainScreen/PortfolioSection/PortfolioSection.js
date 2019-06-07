import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';

import PortfolioItem from './components/PortfolioItem';

import './PortfolioSection.scss';

import home from '../../../assets/images/portfolio1.png';
import userPanel from '../../../assets/images/portfolio2.png';
import adminPanel from '../../../assets/images/portfolio3.png';

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
      home,
      userPanel,
      adminPanel,
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

class PortfolioSection extends Component {
  render() {
    return (
      <Container className='portfolio-section'>
        <Row>
          <Col xs={12} className='center'>
            <h2>My Work</h2>
          </Col>
        </Row>

        <Row>
          {portfolioItems.map(item => {
            return (
              <PortfolioItem key={item.title}
                title={item.title}
                titleLink={item.titleLink}
                description={item.description}
                techStack={item.techStack}
                images={item.images}
              />
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default PortfolioSection;
