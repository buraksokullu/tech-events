import React from 'react';
import s from './Button.scss';

const Button = props => {
  // eslint-disable-next-line react/prop-types
  const { children, type, ...other } = props;

  return (
    <button type="button" className={s.root} {...other}>
      {children}
    </button>
  );
};

export default Button;
