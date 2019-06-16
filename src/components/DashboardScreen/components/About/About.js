import React, { Component } from 'react';
import { Accordion, Card, ListGroupItem, Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as icons from '@fortawesome/free-solid-svg-icons';

class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeKey: null,
      editable: false,
    };
  }

  toggleAccordion = (eventkey) => {
    const { activeKey } = this.state;

    if (eventkey === activeKey) {
      this.setState({ activeKey: null });
    } else {
      this.setState({ activeKey: eventkey });
    }
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
    const { activeKey, editable } = this.state;
    const { data } = this.props;

    return (
      <ListGroupItem>
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h2 className="my-0">{data.header}</h2>
          <FontAwesomeIcon icon={icons[data.icon]} />
        </div>
        <Accordion activeKey={`${activeKey}`}>
          {data.list.map((item, idx) => (
            <Card key={item.itemHeader}>
              <Accordion.Toggle as={Card.Header} eventKey={`${idx}`} onClick={() => this.toggleAccordion(idx)}>
                <div className="d-flex align-items-center justify-content-between">
                  {item.itemHeader}
                  <FontAwesomeIcon className="ml-3" icon={icons.faChevronCircleDown} flip={activeKey === idx ? 'vertical' : null} />
                </div>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey={`${idx}`}>
                <Card.Body>
                  {editable ? (
                    <Form.Group>
                      <Form.Control value={item.itemText} as="textarea" rows="3" />
                    </Form.Group>
                  ) : item.itemText}
                  <div className="d-flex align-items-center justify-content-evenly mt-3">
                    <Button variant="outline-danger" onClick={() => this.handleDelete(item.id)}>
                      Delete Item <FontAwesomeIcon icon={icons.faTrashAlt} />
                    </Button>
                    <Button variant="outline-primary" onClick={() => this.handleEdit(item.id)}>
                      Edit Item <FontAwesomeIcon icon={icons.faEdit} />
                    </Button>
                  </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          ))}
        </Accordion>
        <div className="center">
          <Button variant="outline-success mt-3" onClick={() => this.handleAdd()}>Add Item</Button>
        </div>
      </ListGroupItem>
    );
  }
}

export default About;
