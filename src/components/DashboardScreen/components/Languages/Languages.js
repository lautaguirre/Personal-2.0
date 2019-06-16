import React, { Component, Fragment } from 'react';
import { ListGroupItem, Button, Form } from 'react-bootstrap';
import InputRange from 'react-input-range';

import 'react-input-range/lib/css/index.css';

class Languages extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.data.percentage,
      editable: false,
    };
  }

  handleDelete = (id) => {
    console.log('delete');
  }

  handleEdit = (id) => {
    this.setState({ editable: true });
  }

  handleAdd = () => {
    console.log('add');
  }

  render() {
    const { name, description } = this.props.data;

    return (
      <Fragment>
        <ListGroupItem className="dashboard-language-item">
          <div className="text-center">
            <h2 className="my-0">{name}</h2>
            <div>
              <Button size="sm" variant="outline-primary my-2 mr-3" onClick={() => this.handleEdit()}>Edit</Button>
              <Button size="sm" variant="outline-danger" onClick={() => this.handleDelete()}>Delete</Button>
            </div>
          </div>

          {this.state.editable ? (
            <Form.Group>
              <Form.Control value={description} as="textarea" />
            </Form.Group>
          ) : description}

          <div className="my-4">
            <InputRange
              disabled={!this.state.editable}
              maxValue={100}
              minValue={0}
              value={this.state.value}
              onChange={value => this.setState({ value })}
            />
          </div>
        </ListGroupItem>
        {this.props.lastItem && (
          <ListGroupItem>
            <div className="center">
              <Button variant="outline-success" onClick={() => this.handleAdd()}>Add Item</Button>
            </div>
          </ListGroupItem>
        )}
      </Fragment>
    );
  }
}

export default Languages;
