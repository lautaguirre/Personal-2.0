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

    if (e.target.files[0]) {
      this.setState({
        file: URL.createObjectURL(e.target.files[0]),
      });
    } else {
      this.setState({
        file: null,
      });
    }

    if (onChange) onChange(e.target.files[0] ? e.target.files[0] : '');
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
      previewHeight,
      previewWidth,
      multiple,
      meta: { error, touched, dirty },
    } = this.props;

    const { file } = this.state;

    return (
      <Form.Group style={groupStyle} className="custom-input-file-container">
        {preview && !multiple && (
          <label className="preview-container" htmlFor={inputProps.name}>
            <Image src={file || imagePlaceholder} height={previewHeight || 80} width={previewWidth || 80} fluid />
          </label>
        )}
        <Form.Label htmlFor={inputProps.name}>{label}</Form.Label>
        <div className="input-group">
          <div className="custom-file">
            <input
              disabled={disabled}
              type="file"
              onChange={this.onChange}
              multiple={multiple}
              className={`custom-file-input ${(touched || dirty) && error ? 'is-invalid' : '' }`}
              id={inputProps.name}
            />
            <label className="custom-file-label" htmlFor={inputProps.name}>
              {(this.props.input.value && this.props.input.value.name) || 'Choose file'}
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
