import React, { Component } from 'react';
import { Container, Col, Row, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as icons from '@fortawesome/free-brands-svg-icons';

import './ProgrammingSection.scss';

class ProgrammingSection extends Component {
  renderProgramming = (data) => {
      const renderList = data.content.map((item) => {
        if (item.type === 'icon') {
          return (
            <Col xs={6} md={3} className='center' key={item._id}>
              <FontAwesomeIcon icon={icons[item.asset]} size='5x' />
              <h4>{item.description}</h4>
            </Col>
          );
        } else if (item.type === 'image') {
          return (
            <Col xs={6} md={3} className='center' key={item._id}>
              <Image src={`data:image/svg+xml;base64,${item.asset}`} fluid />
              <h4>{item.description}</h4>
            </Col>
          );
        }

        return null;
      });

      return (
        <div key={data._id}>
          <Row>
            <Col xs={12} className='center' >
              <h2 className="title">{data.name}</h2>
            </Col>
          </Row>
          <Row>
            {renderList}
          </Row>
        </div>
      );

  }

  render() {
    const { data } = this.props;

    return (
      <Container id='programming' className='programming-section'>
        {data.map(this.renderProgramming)}
      </Container>
    );
  }
}

export default ProgrammingSection;