import React, { Component } from 'react';
import Range from 'react-input-range'

class InputRange extends Component {
  onChange = (value) => {
    const { input } = this.props;

    input.onChange(value);
  }

  render() {
    const {
      input: { value, ...input },
      disabled,
    } = this.props;

    return (
      <Range
        value={value || 0}
        {...input}
        disabled={disabled}
        maxValue={100}
        minValue={0}
        onChange={value => this.onChange(value)}
      />
    );
  }
}

export default InputRange;
