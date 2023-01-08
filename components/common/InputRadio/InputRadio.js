import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

class InputRadio extends Component {
  render() {
    const {
      input,
      options,
      inline,
      meta: { error, touched, dirty },
    } = this.props;

    return (
      <Form.Group>
        {options.map((option, idx) =>
          <Form.Check
            {...input}
            label={option.label}
            value={option.value}
            type="radio"
            custom
            checked={option.value === input.value}
            inline={inline}
            id={`${input.name}-${idx}`}
            isInvalid={(touched || dirty) && error}
            key={option.value}
          />
        )}
      </Form.Group>
    );
  }
}

export default InputRadio;
