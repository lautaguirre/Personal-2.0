import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavigationBar from './common/NavigationBar/NavigationBar';
import MainScreen from './MainScreen/MainScreen';
import LoginScreen from './Login/container/LoginContainer';

import store from './store';

import './App.scss';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className='app'>
          <Router>
            <NavigationBar />
            <div className="app-content">
              <Switch>
                <Route exact path='/' component={MainScreen} />
                <Route exact path='/login' component={LoginScreen} />
              </Switch>
            </div>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
