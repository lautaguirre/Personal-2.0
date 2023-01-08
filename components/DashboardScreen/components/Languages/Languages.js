import React, { Component, Fragment } from 'react';
import { ListGroupItem, Button } from 'react-bootstrap';
import { reduxForm, reset, change, Field } from 'redux-form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Range from 'react-input-range';
import Swal from 'sweetalert2';

import { required, maxLength120 } from '../../../../lib/validations';
import InputText from '../../../common/InputText/InputText';
import InputRange from '../../../common/InputRange/InputRange';

import * as actions from '../../actions/dashboardActions';

import 'react-input-range/lib/css/index.css';

class Languages extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editable: null,
      addItem: false,
    };
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
        this.props.actions.deleteLanguage(id);
      }
    })
  }

  handleSave = (form, _id) => {
    if (_id === 'add') {
      this.props.actions.createLanguage(form, () => {
        this.setState({ editable: null, addItem: false });
      });
    } else {
      this.props.actions.editLanguage(form, _id, () => {
        this.setState({ editable: null, addItem: false });
      });
    }
  }

  setEditable = (language, idx) => {
    const { dispatch } = this.props;

    this.setState({ editable: idx, addItem: false });

    dispatch(change('LanguageForm', 'name', language.name));
    dispatch(change('LanguageForm', 'description', language.description));
    dispatch(change('LanguageForm', 'percentage', language.percentage));
  }

  handleAdd = () => {
    const { dispatch, languages } = this.props;

    dispatch(reset('LanguageForm'));

    this.setState({ addItem: true, editable: languages.length });
  }

  handleCancel = () => {
    this.setState({ editable: null, addItem: false });
  }

  render() {
    const { editable, addItem } = this.state;
    const { languages } = this.props;

    let languagesItems = [];
    if (addItem) {
      languagesItems = [ ...languages, { _id: 'add', name: '', description: '', percentage: 0 } ];
    } else {
      languagesItems = [ ...languages ];
    }

    return (
      <Fragment>
        {languagesItems.map((language, idx) => {
          return (
            <ListGroupItem key={language._id} className="dashboard-language-item">
              <form onSubmit={this.props.handleSubmit(form => this.handleSave(form, language._id))}>
                <div className="text-center">
                  {editable === idx ? (
                    <Field
                      name="name"
                      component={InputText}
                      validate={[required, maxLength120]}
                    />
                  ) : (
                    <h2 className="my-0">{language.name}</h2>
                  )}
                </div>

                {editable === idx ? (
                  <Field
                    name="description"
                    renderAs="textarea"
                    component={InputText}
                    groupStyle={{ width: '100%' }}
                    validate={[required, maxLength120]}
                  />
                ) : language.description}

                <div className="my-4">
                  {editable === idx ? (
                    <Field
                      name="percentage"
                      maxValue={100}
                      minValue={0}
                      component={InputRange}
                    />
                  ) : (
                    <Range
                      disabled
                      maxValue={100}
                      minValue={0}
                      value={language.percentage}
                      onChange={() => false}
                    />
                  )}
                </div>

                {editable === idx ? (
                  <div className="my-2 text-center">
                    <Button size="sm" type="submit" variant="outline-primary mr-3">Save</Button>
                    <Button size="sm" variant="outline-danger" onClick={this.handleCancel}>Cancel</Button>
                  </div>
                ) : (
                  <div className="my-2 text-center">
                    <Button size="sm" variant="outline-danger mr-3" onClick={() => this.handleDelete(language._id)}>Delete</Button>
                    <Button size="sm" variant="outline-primary" onClick={() => this.setEditable(language, idx)}>Edit</Button>
                  </div>
                )}
              </form>
            </ListGroupItem>
          );
        })}

        {!addItem &&
          <ListGroupItem>
            <div className="center">
              <Button variant="outline-success" onClick={() => this.handleAdd()}>Add Item</Button>
            </div>
          </ListGroupItem>
        }
      </Fragment>
    );
  }
}

Languages = reduxForm({
  form: 'LanguageForm',
})(Languages);

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(null, mapDispatchToProps)(Languages);
