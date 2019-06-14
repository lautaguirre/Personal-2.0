import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Spinner } from 'react-bootstrap';
import _ from 'lodash';

import * as loginActions from '../../LoginScreen/actions/loginActions';

class PrivateRoute extends Component {
  componentDidMount() {
    if (_.isEmpty(this.props.login.profile)) {
      this.props.loginActions.getUser();
    }
  }

  render() {
    const { login } = this.props;

    if (localStorage.getItem('token') || sessionStorage.getItem('token')) {
      if (login.loginFetching || _.isEmpty(login.profile)) {
        return (
          <div className="center pt-3">
            <Spinner animation="grow" />
          </div>
        );
      } else {
        return <Route {...this.props} />
      }
    } else {
      return <Redirect to="/login" />;
    }
  }
}

const mapStateToProps = state => ({
  login: state.login,
});

const mapDispatchToProps = dispatch => ({
  loginActions: bindActionCreators(loginActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);
