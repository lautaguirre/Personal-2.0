import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';

import PortfolioItem from './components/PortfolioItem';

import './PortfolioSection.scss';

class PortfolioSection extends Component {
  render() {
    const { data } = this.props;

    return (
      <Container className='portfolio-section'>
        <Row>
          <Col xs={12} className='center'>
            <h2 className="title">My Work</h2>
          </Col>
        </Row>

        <Row>
          {data.map(item => {
            return (
              <PortfolioItem key={item._id}
                title={item.title}
                titleLink={item.titleLink}
                description={item.description}
                techStack={item.techStack}
                images={item.images}
              />
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default PortfolioSection;
