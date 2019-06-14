import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle, faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';

import './NoFound.scss';

library.add(faExclamationCircle, faArrowCircleLeft);

class NoFound extends Component {
  render() {
    return (
      <Container className="no-found-screen-container center">
        <Col xs={12} md={6}>
          <ListGroup className="shadow">
            <ListGroupItem className="text-center">
              <h1>Oops! Wrong URL</h1>
              <div className="mb-3">
                <FontAwesomeIcon icon={faExclamationCircle} size="5x" color="black"/>
              </div>
              <Link to="/">
                <FontAwesomeIcon icon={faArrowCircleLeft} className="mr-2" color="black"/>
                <span className="back-link-icon">Go to index</span>
              </Link>
            </ListGroupItem>
          </ListGroup>
        </Col>
      </Container>
    );
  }
}

export default NoFound;
