import React, { Component } from 'react';
import { Accordion, Card, Button, Form, ListGroup, ListGroupItem } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { change, reset, Field, reduxForm } from 'redux-form';
import Swal from 'sweetalert2';

import * as icons from '@fortawesome/free-solid-svg-icons';

import InputText from '../../../common/InputText/InputText';

import { required, maxLength120, maxLength1024 } from '../../../../lib/validations';

class Portfolio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeKey: null,
      editable: null,
      addItem: false,
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
    this.setState({ editable: null, addItem: false });

    Swal.fire({
      title: 'Are you sure?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'red',
      cancelButtonColor: 'grey',
      confirmButtonText: 'Delete',
    }).then((result) => {
      if (result.value) {
        this.props.actions.deletePortfolio(id);
      }
    });
  }

  handleSave = (data, _id) => {
    if (_id === 'add') {
      this.props.actions.createPortfolio(data, () => {
        this.setState({ editable: null, addItem: false });
      });
    } else {
      this.props.actions.editPortfolio(data, _id, () => {
        this.setState({ editable: null, addItem: false });
      });
    }
  }

  setEditable = (idx, item) => {
    const { dispatch, form } = this.props;

    this.setState({ editable: idx, addItem: false });

    dispatch(change(form, 'title', item.title));
    dispatch(change(form, 'description', item.description));
    dispatch(change(form, 'titleLink', item.titleLink));
  }

  handleAdd = () => {
    const { data, dispatch, form } = this.props;

    dispatch(reset(form));

    this.setState({ addItem: true, editable: data.content.length, activeKey: data.content.length });
  }

  render() {
    const { activeKey, editable, addItem } = this.state;
    const { data } = this.props;

    return (
      <ListGroupItem>
        <Accordion activeKey={`${activeKey}`}>
          {data.map((item, idx) => (
            <Card key={item._id}>
              <form onSubmit={this.props.handleSubmit(form => this.handleSave(form, item._id))}>
                <Accordion.Toggle as={Card.Header} style={{ cursor: 'pointer' }} eventKey={`${idx}`} onClick={() => this.toggleAccordion(idx)}>
                  <div className="d-flex align-items-center justify-content-between">
                    {editable === idx ? (
                      <Field
                        name="title"
                        renderAs="textarea"
                        component={InputText}
                        groupStyle={{ width: '100%' }}
                        onClick={e => e.stopPropagation()}
                        validate={[required, maxLength120]}
                      />
                    ) : item.title}
                    <FontAwesomeIcon className="ml-3" icon={icons.faChevronCircleDown} flip={activeKey === idx ? 'vertical' : null} />
                  </div>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={`${idx}`}>
                  <Card.Body>
                    {editable === idx ? (
                      <Field
                        name="titleLink"
                        component={InputText}
                        groupStyle={{ width: '100%' }}
                        onClick={e => e.stopPropagation()}
                        validate={[required, maxLength120]}
                      />
                    ) : <p>{item.titleLink}</p>}

                    {editable === idx ? (
                      <Field
                        name="description"
                        renderAs="textarea"
                        rows="5"
                        component={InputText}
                        groupStyle={{ width: '100%' }}
                        onClick={e => e.stopPropagation()}
                        validate={[required, maxLength1024]}
                      />
                    ) : item.description}

                    {editable === idx ? (
                      <ul>
                        {item.techStack.map((tech) => (
                          <li key={tech._id}>
                            {tech.name}: {tech.description}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <ul>
                        {item.techStack.map((tech) => (
                          <li key={tech._id}>
                            {tech.name}: {tech.description}
                          </li>
                        ))}
                      </ul>
                    )}

                    <ListGroup>
                      {item.images.map(image => (
                        <ListGroup.Item key={image} action variant="light">
                          {image}
                        </ListGroup.Item>
                      ))}
                    </ListGroup>

                    {editable === idx ? (
                      <div className="d-flex align-items-center justify-content-evenly mt-3">
                        <Button variant="outline-primary" type="submit">
                          Save <FontAwesomeIcon icon={icons.faSave} />
                        </Button>
                        <Button variant="outline-danger" onClick={() => this.setState({ editable: null, addItem: false })}>
                          Cancel <FontAwesomeIcon icon={icons.faTimes} />
                        </Button>
                      </div>
                    ) : (
                      <div className="d-flex align-items-center justify-content-evenly mt-3">
                        <Button variant="outline-danger" onClick={() => this.handleDelete(item._id)}>
                          Delete Item <FontAwesomeIcon icon={icons.faTrashAlt} />
                        </Button>
                        <Button variant="outline-primary" onClick={() => this.setEditable(idx, item)}>
                          Edit Item <FontAwesomeIcon icon={icons.faEdit} />
                        </Button>
                      </div>
                    )}
                  </Card.Body>
                </Accordion.Collapse>
              </form>
            </Card>
          ))}
        </Accordion>

        {!addItem &&
          <div className="center">
            <Button variant="outline-success" className="mt-3" onClick={() => this.handleAdd()}>Add Item</Button>
          </div>
        }
      </ListGroupItem>
    );
  }
}

Portfolio = reduxForm({
  form: 'PortfolioForm',
})(Portfolio);

export default Portfolio;
