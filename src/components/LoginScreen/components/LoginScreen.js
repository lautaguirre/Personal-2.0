import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Col, Form, Button, Spinner, Container } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';

import InputText from '../../common/InputText/InputText';
import InputCheck from '../../common/InputCheck/InputCheck';
import { required, email, minLength6, maxLength120, maxLength16 } from '../../../lib/validations';

class LoginScreen extends Component {
  render() {
    const { login } = this.props;

    return (
      <Container className="login-screen-container center">
        <Col xs={12} md={6} >
          <ListGroup className='shadow'>
            <ListGroupItem>
              <Form onSubmit={this.props.handleSubmit}>
                <Field
                  name="email"
                  label="Email Address"
                  placeholder="example@example.com"
                  component={InputText}
                  validate={[required, email, minLength6, maxLength120]}
                />

                <Field
                  name="password"
                  label="Password"
                  placeholder="********"
                  type="password"
                  component={InputText}
                  validate={[required, minLength6, maxLength16]}
                />

                <Field
                  name="rememberMe"
                  label="Remember Me"
                  type="checkbox"
                  component={InputCheck}
                />

                <div className="d-flex justify-content-end">
                  <Button variant="primary" type="submit" disabled={login.loginFetching ? true : false}>
                    {!login.loginFetching ? 'Submit' : (
                      <div>
                        Loading&nbsp;
                        <Spinner
                          as="span"
                          animation="grow"
                          size="sm"
                        />
                      </div>
                    )}
                  </Button>
                </div>
              </Form>
            </ListGroupItem>
          </ListGroup>
        </Col>
      </Container>
    );
  }
}

export default reduxForm({
  form: 'LoginForm',
})(LoginScreen);
