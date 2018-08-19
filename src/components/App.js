import React, { Component } from 'react';

import NavigationBar from './NavigationBar/NavigationBar';
import BackgroundImage from './BackgroundImage/BackgroundImage';
import AboutSection from './AboutSection/AboutSection';
import LanguagesSection from './LanguagesSection/LanguagesSection';
import ProgrammingSection from './ProgramingSection/ProgrammingSection';
import PortfolioSection from './PortfolioSection/PortfolioSection';
import ContactSection from './ContactSection/ContactSection';
import Footer from './Footer/Footer';

import './App.scss';

class App extends Component {
  render() {

    let name = 'Lautaro Aguirre';

    return (
      <div className='app' >

        <NavigationBar />

        <BackgroundImage image={'mainImage'} showBox boxText={name} sectionName={'home'} />

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

export default App;
