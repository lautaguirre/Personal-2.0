import React, { Component } from 'react';
import { Container, Col, Row, Image, ListGroupItem, ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as icons from '@fortawesome/free-solid-svg-icons';

import avatar from '.././../../assets/images/avatar.png';

import './AboutSection.scss';

class AboutSection extends Component {
  renderAboutList = (section) => {
    const renderSectionItems = section.items.map((item, idx) => {
      return (
        <li key={item._id}>
          <strong>{item.itemHeader}</strong><br/>
          {item.itemText}
          {(idx + 1) === section.items.length ? null : <hr/>}
        </li>
      );
    });

    return (
      <ListGroupItem key={section._id}>
        <Row>
          <Col xs={0} md={2} className='center hideOnMobile'>
            <FontAwesomeIcon icon={icons[section.icon]} size="5x"  />
          </Col>
          <Col xs={12} md={10} >
            <h4>{section.header}</h4>
            <hr/>
            <ul>
              {renderSectionItems}
            </ul>
          </Col>
        </Row>
      </ListGroupItem>
    );
  }

  render() {
    const { data } = this.props;

    return (
      <Container>
        <div id='about' className='about-section'>
          <Row>
            <Col xs={12} className='center' >
              <h2 className="title">About</h2>
            </Col>
          </Row>

          <Row>
            <Col xs={12} className='center aboutHeader hideOnMobile'>
              <Image width={165} height={165} className='shadow' src={avatar} roundedCircle fluid />
            </Col>
          </Row>

          <Row >
            <Col xs={12} >
              <ListGroup className='shadow'>
                {data.map(this.renderAboutList)}
              </ListGroup>
            </Col>
          </Row>

        </div>
      </Container>
    );
  }
}

export default AboutSection;
