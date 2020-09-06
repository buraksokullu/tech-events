import React from 'react';
import PropTypes from 'prop-types';

import s from './Button.scss';

const Button = props => {
  const { children, ...other } = props;

  return (
    <button type="button" className={s.root} {...other}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired
};

export default Button;
