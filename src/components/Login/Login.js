import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Col, Form, Button } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';

import InputText from '../common/InputText/InputText';
import InputCheck from '../common/InputCheck/InputCheck';

import './Login.scss';

class Login extends Component {
  render() {
    return (
      <div className="login-screen-container center">
        <Col xs={6} className="pt-3">
          <ListGroup className='shadow'>
            <ListGroupItem>
              <Form>
                <Field
                  name="email"
                  label="Email Address"
                  placeholder="example@example.com"
                  component={InputText}
                />

                <Field
                  name="password"
                  label="Password"
                  placeholder="********"
                  type="password"
                  component={InputText}
                />

                <Field
                  name="rememberMe"
                  label="Remember Me"
                  type="checkbox"
                  component={InputCheck}
                />

                <div className="d-flex justify-content-end">
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

export default reduxForm({
  form: 'LoginForm',
})(Login);
