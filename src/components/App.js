import React, { Component } from 'react';

import { Alert, Button } from 'react-bootstrap';

import NavigationBar from './NavigationBar/NavigationBar'

import './App.scss';

class App extends Component {
  render() {
    return (
      <div>
        <NavigationBar />

        <div className='app'>
          <header className='appHeader' >
            <h1 className='appHeaderTitle' >Welcome to React</h1>
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
      </div>
    );
  }
}

export default App;
