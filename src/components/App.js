import React, { Component } from 'react';

import { Grid, Col, Row } from 'react-bootstrap';

import NavigationBar from './NavigationBar/NavigationBar'

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className='app' >

        <NavigationBar />

        <div className='img1 backgroundImage' >
          <div className='backgroundContent'>
            <span className='backgroundBox' >
              LAUTARO AGUIRRE
            </span>
          </div>
        </div>

        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={12}>

            </Col>
          </Row>
        </Grid>

      </div>
    );
  }
}

export default App;
