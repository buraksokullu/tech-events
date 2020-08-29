import React from 'react';

import s from './Checkbox.scss';

// eslint-disable-next-line react/prop-types
const CheckBox = ({ input, meta: { touched, error }, label, disabled, id, ...args }) => (
  <div className={`${s.checkboxFieldHolder} ${disabled && s.disabled}`} role="presentation">
    <input
      type="checkbox"
      className={`${touched && error && s.error}`}
      id={id}
      {...input}
      {...args}
      checked={input.value}
      disabled={disabled}
    />
    {label && (
      <label htmlFor={id} className={s.checkboxLabel}>
        {label}
      </label>
    )}

    {/* {error && <div>{error}</div>} */}
  </div>
);

export default CheckBox;
