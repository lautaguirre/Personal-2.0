import React, { Component } from 'react';
import { Col, Accordion, Container, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';

library.add(faChevronCircleDown);

class DashboardScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeKey: 0,
    };
  }

  toggleAccordion = (eventkey) => {
    const { activeKey } = this.state;

    if (eventkey === activeKey) {
      this.setState({ activeKey: null });
    } else {
      this.setState({ activeKey: eventkey });
    }
  }

  render() {
    const { activeKey } = this.state;

    console.log(activeKey);

    return (
      <Container className="dashboard-screen-container" fluid>
        <Col xs={6} className="pt-3">
          <ListGroup className="shadow">
            <ListGroupItem>
              <h2 className="mt-0">About</h2>
              <Accordion activeKey={`${activeKey}`}>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="0" onClick={() => this.toggleAccordion(0)}>
                    <div className="d-flex align-items-center justify-content-between">
                      Click me!
                      <FontAwesomeIcon icon={faChevronCircleDown} flip={activeKey === 0 ? 'vertical' : null} />
                    </div>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>Hello! I'm the body</Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="1" onClick={() => this.toggleAccordion(1)}>
                    <div className="d-flex align-items-center justify-content-between">
                      Click me!
                      <FontAwesomeIcon icon={faChevronCircleDown} flip={activeKey === 1 ? 'vertical' : null} />
                    </div>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body>Hello! I'm another body</Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </ListGroupItem>
          </ListGroup>
        </Col>
      </Container>
    );
  }
}

export default DashboardScreen;
