import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './App.scss';

class App extends Component {
  render() {
    return (
      <div className='app' >
        <header className='appHeader' >
          <img src={logo} className='appLogo' alt="logo" />
          <h1 className='appTitle' >Welcome to React</h1>
        </header>
        <p className='appIntro' >
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
