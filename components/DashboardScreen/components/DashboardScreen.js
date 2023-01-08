import React, { Component } from 'react';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';

import About from './About/About';
import Languages from './Languages/Languages';
import Portfolio from './Portfolio/Portfolio';
import Programming from './Programming/Programming';

class DashboardScreen extends Component {
  render() {
    const { about, languages, portfolio, skills } = this.props.dashboard;

    return (
      <Container fluid>
        <Row className="dashboard-screen-container">
          <Col xs={12} md={4}>
            <h2>About</h2>
            <ListGroup className="shadow">
              {about.map((item, idx) => <About form={`AboutForm-${idx}`} key={item._id} data={item} />)}
            </ListGroup>
          </Col>

          <Col xs={12} md={4}>
            <h2>Languages</h2>
            <ListGroup className="shadow">
              <Languages languages={languages} />
            </ListGroup>

            <h2>Skills</h2>
            <ListGroup className="shadow">
              {skills.map((item, idx) => <Programming form={`SkillsForm-${idx}`} key={item._id} data={item} />)}
            </ListGroup>
          </Col>

          <Col xs={12} md={4}>
            <h2>Portfolio</h2>
            <ListGroup className="shadow">
              <Portfolio data={portfolio} />
            </ListGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default DashboardScreen;
