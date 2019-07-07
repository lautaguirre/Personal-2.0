import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';

import LoginScreen from '../components/LoginScreen';

import * as loginActions from '../actions/loginActions';

import './LoginScreen.scss';

class LoginScreenContainer extends Component {
  handleSubmit = (values) => {
    this.props.loginActions.sendLoginData(values);
  }

  render() {
    if (localStorage.getItem('token') || sessionStorage.getItem('token')) {
      return <Redirect to="/dashboard" />;
    }

    return (
      <LoginScreen {...this.props} onSubmit={this.handleSubmit} />
    );
  }
}

const mapStateToProps = state => ({
  login: state.login,
});

const mapDispatchToProps = dispatch => ({
  loginActions: bindActionCreators(loginActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreenContainer);
