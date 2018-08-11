import React, { Component } from 'react';
import './App.scss';

import { Alert, Button } from 'react-bootstrap';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
library.add(faEdit);

class App extends Component {
  render() {
    return (
      <div className='app' >
        <header className='appHeader' >
          <h1 className='appHeaderTitle' >Welcome to React</h1>
        </header>
        <p className='appIntro' >
          To get started, edit <code>src/App.js</code> and save to reload. <FontAwesomeIcon icon={faEdit} />
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
