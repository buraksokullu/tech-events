import React from 'react';

import s from './Input.scss';

// eslint-disable-next-line react/prop-types
const Input = ({ input, type, inputRef, ...args }) => (
  <input {...input} {...args} type={type} ref={inputRef} className={s.input}/>
);

export default Input;
