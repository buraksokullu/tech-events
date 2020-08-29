/* eslint-disable react/prop-types */
import React, { Component } from 'react';

import s from './Textarea.scss';

class Textarea extends Component {
  handleChange = e => {
    const { onChange, input } = this.props;

    if (onChange) {
      onChange(e.target.value);
    } else {
      input.onChange(e.target.value);
    }
  };

  render() {
    const {
      input,
      meta: { touched, error },
      label,
      ...args
    } = this.props;
    return (
      <div className={`${s.fieldHolder} ${!label && s.noLabel}`}>
        {label && <label className={s.label}>{label}</label>}
        <textarea
          className={touched && error ? s.error : ''}
          {...input}
          {...args}
          rows="5"
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Textarea;
