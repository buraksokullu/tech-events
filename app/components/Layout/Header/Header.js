import React from 'react';
import PropTypes from 'prop-types';
import TrivagoIcon from 'Components/svg/TrivagoIcon';
import EventTypeEnums from 'Model/index';
import s from './Header.scss';

const Header = ({ selectEventType }) => (
  <div className={s.header}>
    <div className={s.headerHolder}>
      <a href="/" className={s.logo}>
        <TrivagoIcon />
      </a>
      <div className={s.eventsFilter}>
        <div
          className={s.eventType}
          role="presentation"
          onClick={() => selectEventType(EventTypeEnums.ALL_EVENTS)}
        >
          All Events
        </div>
        <div
          className={s.eventType}
          role="presentation"
          onClick={() => selectEventType(EventTypeEnums.MY_EVENTS)}
        >
          My Events
        </div>
      </div>
    </div>
  </div>
);

Header.propTypes = {
  selectEventType: PropTypes.func.isRequired
};

export default Header;
