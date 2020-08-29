import React, { Component } from 'react';

import s from './Radio.scss';

// eslint-disable-next-line react/prop-types

class Radio extends Component {
  handleOnChange = () => {
    const { onChange, optionValue, input } = this.props;

    if (onChange) {
      onChange(optionValue);
    } else {
      input.onChange(optionValue);
    }
  };

  render() {
    const {
      input,
      meta: { touched, error },
      label,
      id,
      optionValue
    } = this.props;
    return (
      <div className={`${s.radioFieldHolder}`} role="presentation">
        <input
          type="radio"
          className={`${touched && error && s.error}`}
          id={id}
          onChange={this.handleOnChange}
          name={input.name}
          value={optionValue}
          checked={input.value === optionValue}
        />
        {label && (
          <label htmlFor={id} className={s.radioLabel}>
            {label}
          </label>
        )}

        {/* {error && <div>{error}</div>} */}
      </div>
    );
  }
}

export default Radio;
