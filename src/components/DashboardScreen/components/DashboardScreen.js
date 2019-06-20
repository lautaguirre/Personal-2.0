import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Col, Container, ListGroup, Row, Spinner } from 'react-bootstrap';

import About from './About/About';
import Languages from './Languages/Languages';
import Portfolio from './Portfolio/Portfolio';
import Programming from './Programming/Programming';

import * as actions from '../actions/dashboardActions';

class DashboardScreen extends Component {
  componentDidMount() {
    const { actions } = this.props;

    actions.fetchAbout();
    actions.fetchLanguages();
    actions.fetchPortfolio();
    actions.fetchSkills();
  }

  render() {
    const { about, languages, portfolio, skills } = this.props.dashboard;

    if (!(about && languages && portfolio && skills)) {
      return (
        <div className="center pt-3">
          <Spinner animation="grow" />
        </div>
      );
    }

    return (
      <Container fluid>
        <Row className="dashboard-screen-container">
          <Col xs={12} md={4}>
            <h2>About</h2>
            <ListGroup className="shadow">
              {about.map((item, idx) => <About form={`AboutForm-${idx}`} key={item._id} data={item} />)}
            </ListGroup>
          </Col>

          <Col xs={12} md={4}>
            <h2>Languages</h2>
            <ListGroup className="shadow">
              {languages.map((item, idx) => <Languages key={item._id} data={item} lastItem={idx + 1 === languages.length} />)}
            </ListGroup>
          </Col>

          <Col xs={12} md={4}>
            <h2>Portfolio</h2>
            <ListGroup className="shadow">
              <Portfolio data={portfolio} />
            </ListGroup>

            <h2>Skills</h2>
            <ListGroup className="shadow">
              {skills.map(item => <Programming key={item._id} data={item} />)}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  dashboard: state.dashboard,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(DashboardScreen);
