import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import DashboardScreen from '../components/DashboardScreen';

import * as loginActions from '../actions/loginActions';

import './DashboardScreen.scss';

class DashboardScreenContainer extends Component {
  handleSubmit = (values) => {
    this.props.loginActions.sendLoginData(values);
  }

  render() {
    return (
      <DashboardScreen {...this.props} onSubmit={this.handleSubmit} />
    );
  }
}

const mapStateToProps = state => ({
  login: state.login,
});

const mapDispatchToProps = dispatch => ({
  loginActions: bindActionCreators(loginActions, dispatch),
});


export default connect(mapStateToProps, mapDispatchToProps)(DashboardScreenContainer);
