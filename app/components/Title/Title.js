import React from 'react';
import PropTypes from 'prop-types';
import s from './Title.scss';

const Title = ({ children, className }) => (
  <h1 className={`${s.titleHolder} ${className}`}>{children}</h1>
);

Title.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

Title.defaultProps = {
  className: undefined
};
export default Title;
