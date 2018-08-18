import React, { Component } from 'react';

import NavigationBar from './NavigationBar/NavigationBar';
import BackgroundImage from './BackgroundImage/BackgroundImage';
import AboutSection from './AboutSection/AboutSection';
import LanguagesSection from './LanguagesSection/LanguagesSection';

import './App.scss';

class App extends Component {
  render() {

    let name = 'Lautaro Aguirre';

    return (
      <div className='app' >

        <NavigationBar />

        <BackgroundImage image={'mainImage'} showBox boxText={name} />

        <AboutSection />

        <LanguagesSection />

      </div>
    );
  }
}

export default App;
