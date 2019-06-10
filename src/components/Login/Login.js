import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Col, Form, Button } from 'react-bootstrap';

import './Login.scss';

class Login extends Component {
  render() {
    return (
      <div className="login-screen-container center">
        <Col xs={6} className="pt-3">
          <ListGroup className='shadow'>
            <ListGroupItem>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid city.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicChecbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <div>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </div>
              </Form>
            </ListGroupItem>
          </ListGroup>
        </Col>
      </div>
    );
  }
}

export default Login;
