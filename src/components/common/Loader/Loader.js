import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal } from 'react-bootstrap';

import './Loader.scss';

class Loader extends Component {
  render() {
    return (
      <Modal show={this.props.common.loading} centered className="common-modal" onHide={() => console.log('Wait for process to finish')}>
        <Modal.Body className="common-modal-body">
          <div className="lds-ellipsis">
            <div/>
            <div/>
            <div/>
            <div/>
          </div>
        </Modal.Body>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  common: state.common,
});

export default connect(mapStateToProps)(Loader);
