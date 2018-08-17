import React, { Component } from 'react';

import './BackgroundImage.scss';

class App extends Component {
  render() {

    let box = this.props.showBox ?
      <span className='backgroundBox center' >
        {this.props.boxText.toUpperCase()}
      </span> : '' ;

    return (
      <div className={`${this.props.image} backgroundImage`} >
        <div className='backgroundContent shadow'>
          {box}
        </div>
      </div>
    );
  }
}

export default App;
