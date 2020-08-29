import React from 'react';
import FieldLabel from '../FieldLabel/FieldLabel';

import s from './Select.scss';

// eslint-disable-next-line react/prop-types
const Select = ({ input, meta: { touched, error }, label, children, isRequired, ...args }) => (
  <div className={s.fieldHolder}>
    {label && <FieldLabel label={label} isRequired={isRequired} />}
    <select
      className={`${s.input} ${touched && error && s.error} ${input &&
        // eslint-disable-next-line react/prop-types
        input.value &&
        s.notEmptyInput}`}
      {...input}
      {...args}
    >
      {children}
    </select>
    {touched && error && <div className={s.validationText}>{error}</div>}
  </div>
);

export default Select;
