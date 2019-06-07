import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { flipInX } from 'react-animations';

import './BackgroundImage.scss';

class App extends Component {
  render() {
    const animation = keyframes`${flipInX}`;
    const AnimatedSpan = styled.span`
      animation: 2s ${animation};
    `;

    const box = this.props.showBox ?
      <AnimatedSpan className='backgroundBox center shadow' >
        {this.props.boxText.toUpperCase()}
      </AnimatedSpan> : '' ;

    return (
      <div className={`${this.props.image} backgroundImage`} id={this.props.sectionName} >
        <div className='backgroundContent'>
          {box}
        </div>
      </div>
    );
  }
}

export default App;
