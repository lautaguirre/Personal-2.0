import React, { Component } from 'react';

import { Grid, Col, Row, Carousel, Image } from 'react-bootstrap';

import home from '../../assets/images/portfolio1.png';
import userPanel from '../../assets/images/portfolio2.png';
import adminPanel from '../../assets/images/portfolio3.png';

import './PortfolioSection.scss';

class PortfolioSection extends Component {
  render() {
    return (
      <Grid className='portfolio'>

          <Row>
            <Col xs={12} className='center' >
              <h2>My Work </h2>
            </Col>
          </Row>

          <Row >
            <Col xs={12} >
              <a target="_blank" rel="noopener noreferrer" href="https://villamartinarosario.com">
                <h4 className='text-center' ><u>Villa Martina Consultorios</u></h4>
              </a>
              <p>
                This is a freelance project, it is about a website with a responsive design that deals with offices
                reservations by hours for certain kind of professionals. The users can login with a personal account
                and, with a calendar UI, check the offices availability and then select the dates and hours that they
                want to reserve the offices. It also counts with an admin panel where the person in charge can create,
                update or disable users. Admins can also query users information as well as the reservations per month.
              </p>
              <p>To develope this web I used the following tools:</p>
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
            <Carousel interval={7500} slide={false} >
              <Carousel.Item>
                <Image width={1900} height={940} alt="Admin Panel" src={home} />
              </Carousel.Item>
              <Carousel.Item>
                <Image width={1900} height={940} alt="Admin Panel" src={userPanel} />
              </Carousel.Item>
              <Carousel.Item>
                <Image width={1900} height={940} alt="Admin Panel" src={adminPanel} />
              </Carousel.Item>
            </Carousel>
          </Row>

      </Grid>
    );
  }
}

export default PortfolioSection;
