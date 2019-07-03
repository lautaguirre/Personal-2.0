import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import { Typeahead } from 'react-bootstrap-typeahead';

class InputTypeAhead extends Component {
  handleChange = (val) => {
    const { input, valueProperty } = this.props;

    if (val[0]) {
      input.onChange(val[0][valueProperty]);
    } else {
      input.onChange('');
    }
  }

  render() {
    const {
      input,
      groupStyle,
      label,
      placeholder,
      options,
      disabled,
      filterBy,
      renderMenuItem,
      labelKey,
      valueProperty,
      defaultValue,
      meta: { error, touched, dirty },
    } = this.props;

    return (
      <Form.Group style={groupStyle}>
        <Form.Label htmlFor={input.name}>{label}</Form.Label>
        <Typeahead
          onChange={this.handleChange}
          id={input.name}
          disabled={disabled}
          defaultSelected={input.value ? options.filter(option => option[valueProperty] === defaultValue) : []}
          selectHintOnEnter
          filterBy={[filterBy]}
          renderMenuItemChildren={renderMenuItem}
          labelKey={labelKey}
          positionFixed
          isInvalid={((touched || dirty) && error) ? true : false}
          options={options}
          placeholder={placeholder}
        />
        <Form.Control.Feedback type={(touched || dirty) && error ? 'invalid' : 'valid'}>
          {(touched || dirty) && error}
        </Form.Control.Feedback>
      </Form.Group>
    );
  }
}

export default InputTypeAhead;
