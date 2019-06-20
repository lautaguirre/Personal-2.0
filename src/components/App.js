import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';

import NavigationBar from './common/NavigationBar/NavigationBar';
import NoFound from './common/NoFound/NoFound';
import MainScreen from './MainScreen/MainScreen';
import LoginScreen from './LoginScreen/container/LoginScreenContainer';
import DashboardScreen from './DashboardScreen/container/DashboardScreenContainer';
import PrivateRoute from './common/PrivateRoute/PrivateRoute';
import Loader from './common/Loader/Loader';

import store from './store';
import history from './history';

import './App.scss';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className='app'>
          <Router history={history} >
            <Loader />

            <NavigationBar />

            <div className="app-content">
              <Switch>
                <Route exact path='/' component={MainScreen} />
                <Route exact path='/login' component={LoginScreen} />

                <PrivateRoute exact path='/dashboard' component={DashboardScreen} />

                <Route component={NoFound} />
              </Switch>
            </div>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
