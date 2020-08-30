import React from 'react';

import s from './Checkbox.scss';

// eslint-disable-next-line react/prop-types
const CheckBox = ({ input, label, id, value, ...args }) => (
  <div className={`${s.checkboxFieldHolder}`} role="presentation">
    <input type="checkbox" id={id} {...input} {...args} checked={value} />
    {label && (
      <label htmlFor={id} className={s.checkboxLabel}>
        {label}
      </label>
    )}
  </div>
);

export default CheckBox;
