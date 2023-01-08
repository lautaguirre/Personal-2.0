import React, { Component } from 'react';
import { Accordion, Card, Button, ListGroup, ListGroupItem, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { change, reset, Field, reduxForm, FieldArray, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Swal from 'sweetalert2';

import * as icons from '@fortawesome/free-solid-svg-icons';

import InputText from '../../../common/InputText/InputText';
import InputFile from '../../../common/InputFile/InputFile';

import * as actions from '../../actions/dashboardActions';

import { required, maxLength120, maxLength1024, url, pngOnly } from '../../../../lib/validations';

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
    dispatch(change(form, 'techStack', item.techStack));
    dispatch(change(form, 'images', item.images));
  }

  handleAdd = () => {
    const { data, dispatch, form } = this.props;

    dispatch(reset(form));

    this.setState({ addItem: true, editable: data.length, activeKey: data.length });
  }

  renderTech = ({ fields, meta: { error, submitFailed }}) => {
    return (
      <div className="mb-3">
        <div className="text-center">
          <h4>Tech Stack</h4>
        </div>
        {fields.map((techStack, index) => (
          <div key={index} className="d-flex align-items-center mb-1">
            <Field
              name={`${techStack}`}
              component={InputText}
              groupStyle={{ width: '100%', marginBottom: 0 }}
              validate={[required, maxLength120]}
            />
            <FontAwesomeIcon className="ml-3" icon={icons.faMinusCircle} style={{ cursor: 'pointer' }} onClick={() => fields.remove(index)} />
          </div>
        ))}
        <div className="text-center">
          <FontAwesomeIcon icon={icons.faPlusCircle} style={{ cursor: 'pointer' }} onClick={() => fields.push()} />
          {submitFailed && error && <span className="text-danger">{error}</span>}
        </div>
      </div>
    );
  }

  renderImages = ({ fields, meta: { error, submitFailed }}) => {
    const { currentImagesValue } = this.props;

    return (
      <div>
        {fields.map((images, index) => {
          const showPreview = currentImagesValue[index] ? ((currentImagesValue[index] instanceof File) ? true : false) : true;
          const validations = showPreview ? [required, pngOnly] : [required];
          return (
            <ListGroup.Item key={index} variant="light">
              <div className="text-center">
                {!showPreview && <Image src={currentImagesValue[index]} height={150} fluid />}
              </div>
              <Field
                preview={showPreview}
                name={`${images}`}
                component={InputFile}
                previewHeight={150}
                previewWidth={'auto'}
                validate={validations}
              />
              <div className="text-center">
                <Button variant="outline-danger" size="sm" onClick={() => fields.remove(index)}>
                  Delete Image
                </Button>
              </div>
            </ListGroup.Item>
          );
        })}
        <div className="text-center mt-2">
          <Button variant="outline-success" size="sm" onClick={() => fields.push()}>
            Add Image
          </Button>
        </div>
      </div>
    );
  }

  render() {
    const { activeKey, editable, addItem } = this.state;
    const { data } = this.props;

    let dataItems = [];
    if (addItem) {
      dataItems = [ ...data, { _id: 'add', images: [], title: '', titleLink: '', description: '', techStack: [] }];
    } else {
      dataItems = [ ...data ];
    }

    return (
      <ListGroupItem>
        <Accordion activeKey={`${activeKey}`}>
          {dataItems.map((item, idx) => (
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
                        validate={[required, maxLength120, url]}
                      />
                    ) : (
                      <div className="text-center mb-2">
                        <a href={item.titleLink}>
                          {item.titleLink}
                        </a>
                      </div>
                    )}

                    {editable === idx ? (
                      <Field
                        name="description"
                        renderAs="textarea"
                        rows="5"
                        component={InputText}
                        validate={[required, maxLength1024]}
                      />
                    ) : item.description}

                    {editable === idx ? (
                      <FieldArray name={'techStack'} component={this.renderTech} />
                    ) : (
                      <ul>
                        {item.techStack.map((tech, index) => (
                          <li key={index}>
                            {tech}
                          </li>
                        ))}
                      </ul>
                    )}

                    {editable === idx ? (
                      <ListGroup>
                        <FieldArray name={'images'} component={this.renderImages} />
                      </ListGroup>
                    ) : (
                      <ListGroup>
                        {item.images.map((image, index) => (
                          <ListGroup.Item key={index} variant="light" className="text-center">
                            <Image src={image} height={150} fluid />
                          </ListGroup.Item>
                        ))}
                      </ListGroup>
                    )}

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

const mapStateToProps = state => ({
  currentImagesValue: formValueSelector('PortfolioForm')(state, 'images'),
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);
