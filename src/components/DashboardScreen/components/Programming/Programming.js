import React, { Component } from 'react';
import { Accordion, Card, Button, ListGroupItem } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Typeahead } from 'react-bootstrap-typeahead';
import _ from 'lodash';
import * as icons from '@fortawesome/free-solid-svg-icons';
import * as brandIcons from '@fortawesome/free-brands-svg-icons';

const iconsUnion = { ...{...icons}.fas, ...{...brandIcons}.fab };
const iconsArray = _.map(iconsUnion, (icon, key) => {
  return { ...icon, title: key };
});

class Programming extends Component {
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
        {option.iconName} <FontAwesomeIcon icon={iconsUnion[option.title]} />
      </div>
    );
  }

  render() {
    const { activeKey } = this.state;
    const { data } = this.props;

    return (
      <ListGroupItem>
        <h2 className="mt-0">{data.name}</h2>
        <Accordion activeKey={`${activeKey}`}>
          {data.content.map((item, idx) => (
            <Card key={item.description}>
              <Accordion.Toggle as={Card.Header} eventKey={`${idx}`} onClick={() => this.toggleAccordion(idx)}>
                <div className="d-flex align-items-center justify-content-between">
                  {item.description}
                  <FontAwesomeIcon className="ml-3" icon={icons.faChevronCircleDown} flip={activeKey === idx ? 'vertical' : null} />
                </div>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey={`${idx}`}>
                <Card.Body>
                  {item.type === 'image' ? (
                    <div className="custom-file">
                      <input type="file" className="custom-file-input form-control" id="image-upload" />
                      <label className="custom-file-label" htmlFor="image-upload">Choose file...</label>
                    </div>
                  ) : (
                    <Typeahead
                      id="iconsTypeAhead"
                      onChange={(e) => console.log(e[0])}
                      defaultSelected={iconsArray.filter(icon => icon.title === item.asset)}
                      selectHintOnEnter
                      filterBy={['iconName']}
                      renderMenuItemChildren={this.renderChildrenItem}
                      labelKey="iconName"
                      positionFixed
                      options={iconsArray}
                      placeholder="Choose an icon..."
                    />
                  )}

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
        <div className="center">
          <Button variant="outline-success mt-3" onClick={() => this.handleAdd()}>Add Item</Button>
        </div>
      </ListGroupItem>
    );
  }
}

export default Programming;
