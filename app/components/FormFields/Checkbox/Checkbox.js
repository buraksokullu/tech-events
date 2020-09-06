import React from 'react';
import PropTypes from 'prop-types';

import s from './Checkbox.scss';

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

CheckBox.propTypes = {
  input: PropTypes.node,
  label: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string
};

CheckBox.defaultProps = {
  input: null,
  value: null
};

export default CheckBox;
