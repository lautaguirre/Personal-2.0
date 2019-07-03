import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

class InputCheck extends Component {
  render() {
    const {
      input,
      label,
      type, // Must send Checkbox type to receive the checked prop
      meta: { error, touched, dirty },
    } = this.props;

    return (
      <Form.Group>
        <Form.Check
          {...input}
          label={label}
          type={type}
          custom
          id={input.name}
          isInvalid={(touched || dirty) && error}
          feedback={(touched || dirty) && error}
        />
      </Form.Group>
    );
  }
}

export default InputCheck;
