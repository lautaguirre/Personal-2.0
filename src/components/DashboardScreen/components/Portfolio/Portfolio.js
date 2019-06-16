import React, { Component } from 'react';
import { Accordion, Card, Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Typeahead } from 'react-bootstrap-typeahead';
import _ from 'lodash';
import * as icons from '@fortawesome/free-solid-svg-icons';

const iconsArray = _.map({ ...icons }.fas, (icon, key) => {
  return { ...icon, title: key };
});

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

  renderChildrenItem = (option) => {
    return (
      <div className="d-flex justify-content-between align-items-center">
        {option.iconName} <FontAwesomeIcon icon={icons[option.title]} />
      </div>
    );
  }

  render() {
    const { activeKey, editable } = this.state;
    const { data } = this.props;

    return (
      <Accordion activeKey={`${activeKey}`}>
        {data.map((item, idx) => (
          <Card key={item.title}>
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
                    <li key={tech.name}>
                      {tech.name}: {tech.description}
                    </li>
                  ))}
                </ul>
                <Typeahead
                  id="iconsTypeAhead"
                  onChange={(e) => console.log(e)}
                  selectHintOnEnter
                  filterBy={['iconName']}
                  renderMenuItemChildren={this.renderChildrenItem}
                  labelKey="iconName"
                  positionFixed
                  options={iconsArray}
                  placeholder="Choose an icon..."
                />
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
    );
  }
}

export default Portfolio;
