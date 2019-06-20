import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm, Field, change, reset } from 'redux-form';
import { Accordion, Card, ListGroupItem, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as icons from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import InputText from '../../../common/InputText/InputText';

import { required } from '../../../../lib/validations';

import * as actions from '../../actions/dashboardActions';

class About extends Component {
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

  handleDelete = (id, groupId) => {
    Swal.fire({
      title: 'Are you sure?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'red',
      cancelButtonColor: 'grey',
      confirmButtonText: 'Delete',
    }).then((result) => {
      if (result.value) {
        this.props.actions.deleteAbout(id, groupId);
      }
    })
  }

  handleSave = (data, _id, groupId) => {
    if (_id === 'add') {
      this.props.actions.createAbout(data, groupId, () => {
        this.setState({ editable: null, addItem: false });
      });
    } else {
      this.props.actions.editAbout(data, _id, groupId, () => {
        this.setState({ editable: null, addItem: false });
      });
    }
  }

  setEditable = (idx, item) => {
    const { dispatch, form } = this.props;

    this.setState({ editable: idx, addItem: false });

    dispatch(change(form, 'itemHeader', item.itemHeader));
    dispatch(change(form, 'itemText', item.itemText));
  }

  handleAdd = () => {
    const { data, dispatch, form } = this.props;

    dispatch(reset(form));

    this.setState({ addItem: true, editable: data.items.length, activeKey: data.items.length });
  }

  render() {
    const { activeKey, editable, addItem } = this.state;
    const { data } = this.props;

    let groupItems = [];
    if (addItem) {
      groupItems = [ ...data.items, { _id: 'add', itemText: '', itemHeader: '' } ];
    } else {
      groupItems = [ ...data.items ];
    }

    return (
      <ListGroupItem>
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h2 className="my-0">{data.header}</h2>
          <FontAwesomeIcon icon={icons[data.icon]} />
        </div>
        <Accordion activeKey={`${activeKey}`}>
          {groupItems.map((item, idx) => (
            <Card key={item._id}>
              <form onSubmit={this.props.handleSubmit(form => this.handleSave(form, item._id, data._id))}>
                <Accordion.Toggle as={Card.Header} style={{ cursor: 'pointer' }} eventKey={`${idx}`} onClick={() => this.toggleAccordion(idx)}>
                  <div className="d-flex align-items-center justify-content-between">
                    {editable === idx ? (
                      <Field
                        name="itemHeader"
                        type="textarea"
                        component={InputText}
                        groupStyle={{ width: '100%' }}
                        onClick={e => e.stopPropagation()}
                        validate={[required]}
                      />
                    ) : item.itemHeader}
                    <FontAwesomeIcon className="ml-3" icon={icons.faChevronCircleDown} flip={activeKey === idx ? 'vertical' : null} />
                  </div>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={`${idx}`}>
                  <Card.Body>
                    {editable === idx ? (
                      <Field
                        name="itemText"
                        type="textarea"
                        rows="3"
                        component={InputText}
                        validate={[required]}
                      />
                    ) : item.itemText}
                    <div className="d-flex align-items-center justify-content-evenly mt-3">
                      {editable === idx ? (
                        <Fragment>
                          <Button variant="outline-primary" type="submit">
                            Save <FontAwesomeIcon icon={icons.faSave} />
                          </Button>
                          <Button variant="outline-danger" onClick={() => this.setState({ editable: null, addItem: false })}>
                            Cancel <FontAwesomeIcon icon={icons.faTimes} />
                          </Button>
                        </Fragment>
                      ) : (
                        <Fragment>
                          <Button variant="outline-danger" onClick={() => this.handleDelete(item._id, data._id)}>
                          Delete Item <FontAwesomeIcon icon={icons.faTrashAlt} />
                          </Button>
                          <Button variant="outline-primary" onClick={() => this.setEditable(idx, item)}>
                            Edit Item <FontAwesomeIcon icon={icons.faEdit} />
                          </Button>
                        </Fragment>
                      )}
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </form>
            </Card>
          ))}
        </Accordion>
        <div className="center">
          {!addItem && <Button variant="outline-success mt-3" onClick={() => this.handleAdd(data._id)}>Add Item</Button>}
        </div>
      </ListGroupItem>
    );
  }
}

About = reduxForm()(About);

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(null, mapDispatchToProps)(About);
