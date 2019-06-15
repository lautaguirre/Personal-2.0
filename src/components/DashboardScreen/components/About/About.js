import React, { Component } from 'react';
import { Accordion, Card, ListGroupItem, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleDown, faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faChevronCircleDown, faTrashAlt, faEdit);

class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeKey: null,
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
    console.log('edit');
  }

  handleAdd = () => {
    console.log('add');
  }

  render() {
    const { activeKey } = this.state;
    const { data } = this.props;

    return (
      <ListGroupItem>
        <h2 className="mt-0">{data.header}</h2>
        <Accordion activeKey={`${activeKey}`}>
          {data.list.map((item, idx) => (
            <Card key={item.itemHeader}>
              <Accordion.Toggle as={Card.Header} eventKey={`${idx}`} onClick={() => this.toggleAccordion(idx)}>
                <div className="d-flex align-items-center justify-content-between">
                  {item.itemHeader}
                  <FontAwesomeIcon className="ml-3" icon={faChevronCircleDown} flip={activeKey === idx ? 'vertical' : null} />
                </div>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey={`${idx}`}>
                <Card.Body>
                  {item.itemText}
                  <div className="d-flex align-items-center justify-content-evenly mt-3">
                    <Button variant="outline-danger" onClick={() => this.handleDelete(item.id)}>
                      Delete Item <FontAwesomeIcon icon={faTrashAlt} />
                    </Button>
                    <Button variant="outline-primary" onClick={() => this.handleEdit(item.id)}>
                      Edit Item <FontAwesomeIcon icon={faEdit} />
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
