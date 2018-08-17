import React, { Component } from 'react';

import NavigationBar from './NavigationBar/NavigationBar';
import BackgroundImage from './BackgroundImage/BackgroundImage';
import AboutSection from './AboutSection/AboutSection';

import './App.scss';

class App extends Component {
  render() {

    let name = 'Lautaro Aguirre';

    return (
      <div className='app' >

        <NavigationBar />

        <BackgroundImage image={'mainImage'} showBox boxText={name} />

        <AboutSection />

      </div>
    );
  }
}

export default App;
