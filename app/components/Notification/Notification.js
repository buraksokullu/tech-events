import React from 'react';
import PropTypes from 'prop-types';
import s from './Notification.scss';

const Notification = ({ text }) => (
  <div className={s.notification}>
    <div className={s.text}>{text}</div>
  </div>
);

Notification.propTypes = {
  text: PropTypes.string.isRequired
};

export default Notification;
