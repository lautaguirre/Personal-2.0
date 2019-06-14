import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import DashboardScreen from '../components/DashboardScreen';

import * as dashboardActions from '../actions/dashboardActions';

import './DashboardScreen.scss';

class DashboardScreenContainer extends Component {
  handleSubmit = (values) => {
    this.props.dashboardActions.sendLoginData(values);
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
  dashboardActions: bindActionCreators(dashboardActions, dispatch),
});


export default connect(mapStateToProps, mapDispatchToProps)(DashboardScreenContainer);
