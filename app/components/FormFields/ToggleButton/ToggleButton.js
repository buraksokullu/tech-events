import React, { Component } from 'react';
import PropTypes from 'prop-types';

import s from './ToggleButton.scss';

// eslint-disable-next-line react/prop-types
const ToggleButton = ({ input, meta: { touched, error }, label, disabled, id, ...args }) => (
  <div className={`${s.toggleButtonHolder} ${disabled && s.disabled}`}>
    {label && (
      <label htmlFor={id} className={s.checkboxLabel}>
        {label}
      </label>
    )}
    <input
      type="checkbox"
      className={`${touched && error && s.error}`}
      id={id}
      {...input}
      {...args}
      checked={input.value}
      disabled={disabled}
    />

    {/* {error && <div>{error}</div>} */}
  </div>
);

export default ToggleButton;
