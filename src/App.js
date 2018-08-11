import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Alert, Button } from 'react-bootstrap';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

library.add(faUser);

class App extends Component {
  render() {
    return (
      <div className='app' >
        <header className='appHeader' >
          <img src={logo} className='appLogo' alt="logo" />
          <h1 className='appTitle' >Welcome to React <FontAwesomeIcon icon={faUser} /></h1>
        </header>
        <p className='appIntro' >
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Alert bsStyle="danger">
          <strong>Holy guacamole!</strong> Best check yo self, you're not looking too
          good.
        </Alert>
        <Button bsStyle="primary">Primary</Button>
      </div>
    );
  }
}

export default App;
