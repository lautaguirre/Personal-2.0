import React, { Component } from 'react';
import { Accordion, Card, Button, Form, ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as icons from '@fortawesome/free-solid-svg-icons';

class Portfolio extends Component {
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
      <Accordion activeKey={`${activeKey}`}>
        {data.map((item, idx) => (
          <Card key={item._id}>
            <Accordion.Toggle as={Card.Header} eventKey={`${idx}`} onClick={() => this.toggleAccordion(idx)}>
              <div className="d-flex align-items-center justify-content-between">
                {item.title}
                <FontAwesomeIcon className="ml-3" icon={icons['faChevronCircleDown']} flip={activeKey === idx ? 'vertical' : null} />
              </div>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={`${idx}`}>
              <Card.Body>
                <p>{item.titleLink}</p>
                {editable ? (
                  <Form.Group>
                    <Form.Control value={item.description} as="textarea" rows="3" />
                  </Form.Group>
                ) : item.description}
                <ul>
                  {item.techStack.map((tech) => (
                    <li key={tech._id}>
                      {tech.name}: {tech.description}
                    </li>
                  ))}
                </ul>

                <ListGroup>
                  {item.images.map(image => (
                    <ListGroup.Item action variant="light">
                      {image}
                    </ListGroup.Item>
                  ))}
                </ListGroup>

                <div className="d-flex align-items-center justify-content-evenly mt-3">
                  <Button variant="outline-danger" onClick={() => this.handleDelete(item._id)}>
                    Delete Item <FontAwesomeIcon icon={icons.faTrashAlt} />
                  </Button>
                  <Button variant="outline-primary" onClick={() => this.handleEdit(item._id)}>
                    Edit Item <FontAwesomeIcon icon={icons.faEdit} />
                  </Button>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        ))}
      </Accordion>
    );
  }
}

export default Portfolio;
