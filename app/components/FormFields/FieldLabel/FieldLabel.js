import React from 'react';

import s from './FieldLabel.scss';

// eslint-disable-next-line react/prop-types
const FieldLabel = ({ label, isRequired = false }) => (
  <label className={s.fieldLabel}>
    {label}
    {isRequired && <span className={s.required}>*</span>}
  </label>
);

export default FieldLabel;
