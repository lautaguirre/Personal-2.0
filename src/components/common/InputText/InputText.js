import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

class InputText extends Component {
  render() {
    const {
      input,
      maxLength,
      label,
      type,
      placeholder,
      rows,
      groupStyle,
      onClick,
      meta: { error, touched, dirty },
    } = this.props;

    return (
      <Form.Group style={groupStyle}>
        <Form.Label htmlFor={input.name}>{label}</Form.Label>
        <Form.Control
          {...input}
          id={input.name}
          as={type}
          placeholder={placeholder}
          maxLength={maxLength}
          isValid={(touched || dirty) && !error}
          isInvalid={(touched || dirty) && error}
          rows={rows}
          onClick={onClick}
        />
        <Form.Control.Feedback type={(touched || dirty) && error ? 'invalid' : 'valid'}>
          {(touched || dirty) && error}
        </Form.Control.Feedback>
      </Form.Group>
    );
  }
}

export default InputText;
