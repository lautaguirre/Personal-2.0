import React, { Component } from 'react';

import NavigationBar from '../common/NavigationBar/NavigationBar';
import BackgroundImage from '../common/BackgroundImage/BackgroundImage';
import AboutSection from './AboutSection/AboutSection';
import LanguagesSection from './LanguagesSection/LanguagesSection';
import ProgrammingSection from './ProgramingSection/ProgrammingSection';
import PortfolioSection from './PortfolioSection/PortfolioSection';
import ContactSection from './ContactSection/ContactSection';
import Footer from './Footer/Footer';

class MainScreen extends Component {
  render() {
    return (
      <div>
        <NavigationBar />

        <BackgroundImage image={'mainImage'} showBox boxText={'Lautaro Aguirre'} sectionName={'home'} />

        <AboutSection />

        <LanguagesSection />

        <ProgrammingSection />

        <BackgroundImage image={'portfolioImage'} showBox boxText={'Portfolio'} sectionName={'portfolio'} />

        <PortfolioSection />

        <BackgroundImage image={'contactImage'} showBox boxText={'Contact'} sectionName={'contact'} />

        <ContactSection />

        <Footer />
      </div>
    );
  }
}

export default MainScreen;
