import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Spinner } from 'react-bootstrap';

import DashboardScreen from '../components/DashboardScreen';

import * as dashboardActions from '../actions/dashboardActions';

import './DashboardScreen.scss';

class DashboardScreenContainer extends Component {
  componentDidMount() {
    const { dashboardActions } = this.props;

    dashboardActions.fetchAbout();
    dashboardActions.fetchLanguages();
    dashboardActions.fetchPortfolio();
    dashboardActions.fetchSkills();
  }

  render() {
    const { about, languages, portfolio, skills } = this.props.dashboard;

    if (!(about && languages && portfolio && skills)) {
      return (
        <div className="center pt-3">
          <Spinner animation="grow" />
        </div>
      );
    }

    return (
      <DashboardScreen {...this.props} />
    );
  }
}

const mapStateToProps = state => ({
  login: state.login,
  dashboard: state.dashboard,
});

const mapDispatchToProps = dispatch => ({
  dashboardActions: bindActionCreators(dashboardActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardScreenContainer);
