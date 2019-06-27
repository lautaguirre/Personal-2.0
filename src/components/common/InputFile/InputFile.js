import React, { Component } from 'react';
import { Form, Image } from 'react-bootstrap';
import imagePlaceholder from '../../../assets/images/imagePlaceholder.png';

import './InputFile.scss';

class InputFile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      file: null,
    };
  }

  onChange = (e) => {
    const { onChange } = this.props.input;
    const { preview } = this.props;

    if (preview) {
      if (e.target.files[0]) {
        this.setState({
          file: URL.createObjectURL(e.target.files[0]),
        });
      } else {
        this.setState({
          file: null,
        });
      }
    }

    if (onChange) onChange(e);
  }

  render() {
    const {
      input: {
        value: omitValue,
        ...inputProps
      },
      label,
      disabled,
      groupStyle,
      preview,
      multiple,
      meta: { error, touched, dirty },
    } = this.props;

    const { file } = this.state;

    return (
      <Form.Group style={groupStyle} className="custom-input-file-container">
        {preview && !multiple && (
          <div className="preview-container">
            <Image src={file || imagePlaceholder} height={80} width={80} fluid />
          </div>
        )}
        <Form.Label htmlFor={inputProps.name}>{label}</Form.Label>
        <div className="input-group">
          <div className="custom-file">
            <input
              {...inputProps}
              disabled={disabled}
              type="file"
              onChange={this.onChange}
              multiple={multiple}
              className={`custom-file-input ${(touched || dirty) && error ? 'is-invalid' : '' }`}
              id={inputProps.name}
            />
            <label className="custom-file-label" htmlFor={inputProps.name}>
              {(this.props.input.value[0] && this.props.input.value[0].name) || 'Choose file'}
            </label>
          </div>
        </div>
        <Form.Control.Feedback style={{ display: 'block' }} type={(touched || dirty) && error ? 'invalid' : 'valid'}>
          {(touched || dirty) && error}
        </Form.Control.Feedback>
      </Form.Group>
    );
  }
}

export default InputFile;
