import React, { FC } from "react";
import {
  ListGroup,
  ListGroupItem,
  Col,
  Form as BootstrapForm,
  Button,
  Spinner,
  Container,
} from "react-bootstrap";
import Router from "next/router";
import { Field, Form } from "react-final-form";
import { getAuth } from "@/state/selectors/auth/authSelectors";
import {
  required,
  email,
  minLength6,
  maxLength120,
  maxLength16,
  composeValidators,
} from "@/lib/validations";
import * as authActions from "@/state/actions/auth/authActions";
import { useAppDispatch } from "@/lib/hooks/useAppDispatch";
import { useAppSelector } from "@/lib/hooks/useAppSelector";

import InputText from "../../common/InputText/InputText";
import InputCheck from "../../common/InputCheck/InputCheck";

import * as S from "./Styled";

interface FormValues {
  email: string;
  password: string;
  rememberMe: boolean;
}

const LoginScreen: FC = () => {
  const { loginFetching } = useAppSelector(getAuth);
  const dispatch = useAppDispatch();

  const handleSubmit = (values: FormValues) => {
    dispatch(
      authActions.sendLoginData(values, () => {
        Router.push("/dashboard");
      })
    );
  };

  if (typeof window !== "undefined") {
    if (localStorage.getItem("token") || sessionStorage.getItem("token")) {
      Router.push("/dashboard");
    }
  }

  return (
    <Container>
      <S.LoginContainer>
        <Col xs={12} md={6}>
          <ListGroup className="shadow">
            <ListGroupItem>
              <Form<FormValues> onSubmit={handleSubmit}>
                {({ handleSubmit }) => {
                  return (
                    <BootstrapForm onSubmit={handleSubmit}>
                      <Field
                        name="email"
                        label="Email Address"
                        placeholder="example@example.com"
                        component={InputText}
                        validate={composeValidators(
                          required,
                          email,
                          minLength6,
                          maxLength120
                        )}
                      />

                      <Field
                        name="password"
                        label="Password"
                        placeholder="********"
                        type="password"
                        component={InputText}
                        validate={composeValidators(
                          required,
                          minLength6,
                          maxLength16
                        )}
                      />

                      <Field
                        name="rememberMe"
                        label="Remember Me"
                        type="checkbox"
                        component={InputCheck}
                      />

                      <div className="d-flex justify-content-end">
                        <Button
                          variant="primary"
                          type="submit"
                          disabled={loginFetching ? true : false}
                        >
                          {!loginFetching ? (
                            "Submit"
                          ) : (
                            <div>
                              Loading&nbsp;
                              <Spinner as="span" animation="grow" size="sm" />
                            </div>
                          )}
                        </Button>
                      </div>
                    </BootstrapForm>
                  );
                }}
              </Form>
            </ListGroupItem>
          </ListGroup>
        </Col>
      </S.LoginContainer>
    </Container>
  );
};

export default LoginScreen;
