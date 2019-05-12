import React, { Component } from 'react';

import { Container, Col, Row, Carousel, Image } from 'react-bootstrap';

import home from '../../assets/images/portfolio1.png';
import userPanel from '../../assets/images/portfolio2.png';
import adminPanel from '../../assets/images/portfolio3.png';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'

import './PortfolioSection.scss';

library.add(faChevronRight, faChevronLeft);

class PortfolioSection extends Component {
  render() {
    const carouselNext = <FontAwesomeIcon icon={faChevronRight} size="3x" color="black"/>;
    const carouselPrevious = <FontAwesomeIcon icon={faChevronLeft} size="3x" color="black"/>;

    return (
      <Container className='portfolio'>

          <Row>
            <Col xs={12} className='center' >
              <h2>My Work </h2>
            </Col>
          </Row>

          <Row >
            <Col xs={12} >
              <a target="_blank" rel="noopener noreferrer" href="https://villamartinarosario.com" >
                <h4 className='text-center' ><u>Villa Martina Consultorios</u></h4>
              </a>
              <p>
                This is a freelance project, it is about a website with a responsive design that deals with offices
                reservations by hours for certain kind of professionals. The users can login with a personal account
                and, with a calendar UI, check the offices availability and then select the dates and hours that they
                want to reserve the offices. It also counts with an admin panel where the person in charge can create,
                update or disable users. Admins can also query users information as well as the reservations per month.
                (I'm also planning to update this project using Laravel + ReactJs)
              </p>
              <p>To develope this website I used:</p>
              <ul>
                <li>
                  <strong>Front-end:</strong> HTML5 and CSS3 with Bootstrap and Javascript with jQuery</li>
                <li>
                  <strong>Data exchange:</strong> Ajax with JSON</li>
                <li>
                  <strong>Back-end:</strong> PHP</li>
                <li>
                  <strong>Database:</strong> MySQL</li>
                <li>
                  <strong>Libraries:</strong> Fullcalendar for the calendar UI and Moment.js for dates management.</li>
              </ul>
            </Col>
          </Row>

          <Row>
            <Carousel
              interval={7500}
              className='shadow'
              nextIcon={carouselNext}
              prevIcon={carouselPrevious}
            >
              <Carousel.Item>
                <Image alt="Admin Panel" src={home} fluid />
              </Carousel.Item>
              <Carousel.Item>
                <Image alt="Admin Panel" src={userPanel} fluid />
              </Carousel.Item>
              <Carousel.Item>
                <Image alt="Admin Panel" src={adminPanel} fluid />
              </Carousel.Item>
            </Carousel>
          </Row>

          <hr/>

          <Row >
            <Col xs={12} >
              <h4 className='text-center' ><u>This Website</u></h4>
              <p>
                This serves as my CV and a simple demo of what I can do in the Front-End, feel free to check the responsive design. And
                if you want to take a look at the source code you can do it
                <a target="_blank" rel="noopener noreferrer" href='https://github.com/lautaguirre/Personal-2.0' > <u>HERE</u></a>.
              </p>
              <p>
                To develop this  website I used:
              </p>
              <ul>
                <li>
                  <strong>ReactJs</strong>
                </li>
                <li>
                  <strong>Webpack</strong>
                </li>
                <li>
                  <strong>Bootstrap</strong>
                </li>
                <li>
                  <strong>Sass</strong>
                </li>
              </ul>
            </Col>
          </Row>

      </Container>
    );
  }
}

export default PortfolioSection;
