import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Spinner } from 'react-bootstrap';

import BackgroundImage from '../common/BackgroundImage/BackgroundImage';
import AboutSection from './AboutSection/AboutSection';
import LanguagesSection from './LanguagesSection/LanguagesSection';
import ProgrammingSection from './ProgramingSection/ProgrammingSection';
import PortfolioSection from './PortfolioSection/PortfolioSection';
import ContactSection from './ContactSection/ContactSection';
import Footer from './Footer/Footer';

import * as dashboardActions from '../DashboardScreen/actions/dashboardActions';

class MainScreen extends Component {
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
      <div>
        <BackgroundImage image={'mainImage'} showBox boxText={'Lautaro Aguirre'} />

        <AboutSection data={about} />

        <LanguagesSection data={languages} />

        <ProgrammingSection data={skills} />

        <BackgroundImage image={'portfolioImage'} showBox boxText={'Portfolio'} sectionName={'portfolio'} />

        <PortfolioSection data={portfolio} />

        <BackgroundImage image={'contactImage'} showBox boxText={'Contact'} sectionName={'contact'} />

        <ContactSection />

        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  dashboard: state.dashboard,
});

const mapDispatchToProps = dispatch => ({
  dashboardActions: bindActionCreators(dashboardActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
