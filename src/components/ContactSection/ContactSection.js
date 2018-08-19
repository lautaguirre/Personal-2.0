import React, { Component } from 'react';

import { Grid, Col, Row } from 'react-bootstrap';

import './ContactSection.scss';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

library.add(faLinkedin, faEnvelope);

class ContactSection extends Component {
  render() {
    return (
      <Grid className='contact' >

          <Row >
            <Col xs={12} className='center' >
              <h2>Send me a message!</h2>
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
                  <strong>Front-end:</strong> HTML5 and CSS3 with Bootstrap 3 and Javascript with jQuery</li>
                <li>
                  <strong>Data exchange:</strong> Ajax with JSON</li>
                <li>
                  <strong>Back-end:</strong> PHP</li>
                <li>
                  <strong>Database:</strong> MySQL</li>
                <li>
                  <strong>Libraries:</strong> Fullcalendar for calendar UI and Moment.js for dates management.</li>
              </ul>
            </Col>
          </Row>

      </Grid>
    );
  }
}

export default ContactSection;
