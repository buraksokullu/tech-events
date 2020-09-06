import React from 'react';
import PropTypes from 'prop-types';

import s from './Input.scss';

const Input = ({ input, type, ...args }) => (
  <input {...input} {...args} type={type} className={s.input} />
);

Input.propTypes = {
  input: PropTypes.node,
  type: PropTypes.string
};

Input.defaultProps = {
  input: null,
  type: 'text'
};

export default Input;
