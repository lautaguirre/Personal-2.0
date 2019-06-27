import React, { Component, Fragment } from 'react';
import { Accordion, Card, Button, ListGroupItem, Image } from 'react-bootstrap';
import { reduxForm, reset, change, Field, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Typeahead } from 'react-bootstrap-typeahead';
import _ from 'lodash';
import Swal from 'sweetalert2';
import * as icons from '@fortawesome/free-solid-svg-icons';
import * as brandIcons from '@fortawesome/free-brands-svg-icons';

import InputFile from '../../../common/InputFile/InputFile';
import { required, svgOnly, maxLength120 } from '../../../../lib/validations';
import InputText from '../../../common/InputText/InputText';

const iconsUnion = { ...{...icons}.fas, ...{...brandIcons}.fab };
const iconsArray = _.map(iconsUnion, (icon, key) => {
  return { ...icon, title: key };
});

class Programming extends Component {
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
        this.props.actions.deleteSkill(id, groupId);
      }
    })
  }

  handleSave = (data, _id, groupId) => {
    return console.log({ data, _id, groupId});
    if (_id === 'add') {
      this.props.actions.createSkill(data, groupId, () => {
        this.setState({ editable: null, addItem: false });
      });
    } else {
      this.props.actions.editSkill(data, _id, groupId, () => {
        this.setState({ editable: null, addItem: false });
      });
    }
  }

  setEditable = (idx, item) => {
    const { dispatch, form } = this.props;

    this.setState({ editable: idx, addItem: false });

    dispatch(change(form, 'description', item.description));
    dispatch(change(form, 'asset', [{ type: 'image/svg+xml', asset: item.asset }]));
    dispatch(change(form, 'type', item.type));
  }

  handleAdd = () => {
    const { data, dispatch, form } = this.props;

    dispatch(reset(form));

    this.setState({ addItem: true, editable: data.content.length, activeKey: data.content.length });
  }

  renderChildrenItem = (option) => {
    return (
      <div className="d-flex justify-content-between align-items-center">
        {option.iconName} <FontAwesomeIcon icon={iconsUnion[option.title]} />
      </div>
    );
  }

  render() {
    const { activeKey, editable, addItem } = this.state;
    const { data, currentAssetValue } = this.props;

    let groupItems = [];
    if (addItem) {
      groupItems = [ ...data.content, { _id: 'add', description: '', type: 'icon', asset: '' } ];
    } else {
      groupItems = [ ...data.content ];
    }

    const showPreview = _.get(currentAssetValue, '[0].asset') ? false : true;

    return (
      <ListGroupItem>
        <h2 className="mt-0">{data.name}</h2>
        <Accordion activeKey={`${activeKey}`}>
          {groupItems.map((item, idx) => (
            <Card key={item._id}>
              <form onSubmit={this.props.handleSubmit(form => this.handleSave(form, item._id, data._id))}>
                <Accordion.Toggle as={Card.Header} style={{ cursor: 'pointer' }} eventKey={`${idx}`} onClick={() => this.toggleAccordion(idx)}>
                  <div className="d-flex align-items-center justify-content-between">
                    {editable === idx ? (
                      <Field
                        name="description"
                        renderAs="textarea"
                        component={InputText}
                        groupStyle={{ width: '100%' }}
                        onClick={e => e.stopPropagation()}
                        validate={[required, maxLength120]}
                      />
                    ) : item.description}
                    <FontAwesomeIcon className="ml-3" icon={icons.faChevronCircleDown} flip={activeKey === idx ? 'vertical' : null} />
                  </div>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={`${idx}`}>
                  <Card.Body>
                    {item.type === 'image' ? (
                      editable === idx ? (
                        <Fragment>
                          <div className="text-center">
                            {!showPreview && <Image src={`data:image/svg+xml;base64,${item.asset}`} fluid />}
                          </div>
                          <Field
                            preview={showPreview}
                            name="asset"
                            component={InputFile}
                            validate={[required, svgOnly]}
                          />
                        </Fragment>
                      ) : (
                        <div className="text-center">
                          <Image src={`data:image/svg+xml;base64,${item.asset}`} fluid />
                        </div>
                      )
                    ) : (
                      editable === idx ? (
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
                      ) : (
                        <Typeahead
                          id="iconsTypeAhead"
                          disabled
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
                      )
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
                        <Button variant="outline-danger" onClick={() => this.handleDelete(item._id, data._id)}>
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
        <div className="center">
          {!addItem && <Button variant="outline-success mt-3" onClick={() => this.handleAdd()}>Add Item</Button>}
        </div>
      </ListGroupItem>
    );
  }
}

Programming = reduxForm()(Programming);

const mapStateToProps = (state, ownProps) => ({
  currentAssetValue: formValueSelector(ownProps.form)(state, 'asset'),
});

export default connect(mapStateToProps)(Programming);
