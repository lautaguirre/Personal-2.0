import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

class InputText extends Component {
  render() {
    const {
      input,
      maxLength,
      label,
      type,
      disabled,
      placeholder,
      rows,
      groupStyle,
      onClick,
      renderAs,
      meta: { error, touched, dirty },
    } = this.props;

    return (
      <Form.Group style={groupStyle}>
        {label && <Form.Label htmlFor={input.name}>{label}</Form.Label>}
        <Form.Control
          {...input}
          id={input.name}
          type={type || 'text'}
          as={renderAs}
          placeholder={placeholder}
          maxLength={maxLength}
          isValid={(touched || dirty) && !error}
          isInvalid={(touched || dirty) && error}
          rows={rows}
          onClick={onClick}
          disabled={disabled}
        />
        <Form.Control.Feedback type={(touched || dirty) && error ? 'invalid' : 'valid'}>
          {(touched || dirty) && error}
        </Form.Control.Feedback>
      </Form.Group>
    );
  }
}

export default InputText;
