import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import LoginScreen from '../components/LoginScreen';

import * as loginActions from '../actions/loginActions';

import './LoginScreen.scss';

class LoginScreenContainer extends Component {
  handleSubmit = (values) => {
    this.props.loginActions.sendLoginData(values);
  }

  render() {
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
