import React, { Component } from 'react';
import { Container, Col, Row, Image } from 'react-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faJs, faHtml5, faCss3Alt, faPhp, faNode, faBootstrap, faGitAlt } from '@fortawesome/free-brands-svg-icons';

import mongodbSvg from '../../../assets/images/mongodb.svg';
import jquerySvg from '../../../assets/images/jquery.svg';
import jsonSvg from '../../../assets/images/json.svg';
import mySqlSvg from '../../../assets/images/mysql.svg';

import './ProgrammingSection.scss';

library.add(faReact, faJs, faHtml5, faCss3Alt, faPhp, faNode, faBootstrap, faGitAlt);

const programmingData = [
  {
    name: 'Programming Languages',
    content: [
      {
        type: 'icon',
        description: 'HTML5',
        asset: faHtml5,
      },
      {
        type: 'icon',
        description: 'CSS3',
        asset: faCss3Alt,
      },
      {
        type: 'icon',
        description: 'Javascript',
        asset: faJs,
      },
      {
        type: 'icon',
        description: 'PHP',
        asset: faPhp,
      },
    ],
  },
  {
    name: 'Frameworks and Tools',
    content: [
      {
        type: 'icon',
        description: 'ReactJs',
        asset: faReact,
      },
      {
        type: 'image',
        description: 'MongoDB',
        asset: mongodbSvg,
      },
      {
        type: 'icon',
        description: 'NodeJs',
        asset: faNode,
      },
      {
        type: 'icon',
        description: 'Git',
        asset: faGitAlt,
      },
      {
        type: 'icon',
        description: 'Bootstrap',
        asset: faBootstrap,
      },
      {
        type: 'image',
        description: 'MySQL',
        asset: mySqlSvg,
      },
      {
        type: 'image',
        description: 'JSON',
        asset: jsonSvg,
      },
      {
        type: 'image',
        description: 'JQuery',
        asset: jquerySvg,
      },
    ],
  },
];

class ProgrammingSection extends Component {
  renderProgramming = (data, idx) => {
      const renderList = data.content.map((item) => {
        if (item.type === 'icon') {
          return (
            <Col xs={6} md={3} className='center' key={item.description}>
              <FontAwesomeIcon icon={item.asset} size='5x' />
              <h4>{item.description}</h4>
            </Col>
          );
        } else if (item.type === 'image') {
          return (
            <Col xs={6} md={3} className='center' key={item.description}>
              <Image src={item.asset} fluid />
              <h4>{item.description}</h4>
            </Col>
          );
        }

        return null;
      });

      return [
        <Row key={idx}>
          <Col xs={12} className='center' >
            <h2 className="title">{data.name}</h2>
          </Col>
        </Row>,
        <Row key={idx}>
          {renderList}
        </Row>
      ];

  }

  render() {
    return (
      <Container>
        <div id='programming' className='programming-section' >
          {programmingData.map(this.renderProgramming)}
        </div>
      </Container>
    );
  }
}

export default ProgrammingSection;