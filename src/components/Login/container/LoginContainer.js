import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Login from '../components/Login';

import * as loginActions from '../actions/loginActions';

import './Login.scss';

class LoginContainer extends Component {
  handleSubmit = (values) => {
    this.props.loginActions.sendLoginData(values);
  }

  render() {
    return (
      <div className="login-screen-container center">
        <Login {...this.props} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  login: state.login,
});

const mapDispatchToProps = dispatch => ({
  loginActions: bindActionCreators(loginActions, dispatch),
});


export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
