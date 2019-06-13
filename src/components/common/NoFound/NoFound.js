import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

import './NoFound.scss';

library.add(faExclamationCircle);

class NoFound extends Component {
  render() {
    return (
      <Container className="no-found-screen-container center">
        <Col xs={6} className="pt-3">
          <ListGroup className="shadow">
            <ListGroupItem className="text-center">
              <h1>Oops! Wrong URL</h1>
              <div className="mb-3">
                <FontAwesomeIcon icon={faExclamationCircle} size="5x" color="black"/>
              </div>
              <Link to="/">Go to index</Link>
            </ListGroupItem>
          </ListGroup>
        </Col>
      </Container>
    );
  }
}

export default NoFound;
