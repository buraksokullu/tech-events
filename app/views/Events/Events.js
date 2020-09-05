import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from 'Components/FormFields/Button/Button';
import ClockIcon from 'Components/svg/ClockIcon';
import WorldIcon from 'Components/svg/WorldIcon';
import { formatDate, getTime, getTimeDifference } from 'Utils/helper';

import s from './Events.scss';

export class Events extends Component {
  getCityName = id => {
    const { cities } = this.props;

    if (cities !== null) {
      return cities.find(x => x.id === id).name;
    }
    return '';
  };

  render() {
    const { events, toggleModal, cancelEvent } = this.props;
    return (
      <div>
        <div className={s.dashboard}>
          {events && events.length > 0 ? (
            events.map(item => (
              <div className={s.event} key={item.id}>
                <div className={s.date}>{formatDate(item.startDate)}</div>
                <div className={s.item}>
                  <div className={s.firstRow}>
                    <div className={s.eventName}>
                      {item.isFree && <span className={s.isFree}> FREE </span>}
                      <strong className={s.name}>{item.name}</strong>
                    </div>
                    {item.isSelected ? (
                      <Button onClick={() => cancelEvent(item.id)}> Cancel </Button>
                    ) : (
                      <Button onClick={() => toggleModal(item.id, item.name)}> Sign Up </Button>
                    )}
                  </div>
                  <div className={s.secondRow}>
                    <span className={s.cityName}>
                      <WorldIcon />
                      <span>{this.getCityName(item.city)}</span>
                    </span>
                    <span className={s.timeDifferences}>
                      {getTimeDifference(item.startDate, item.endDate)}
                    </span>
                    <div className={s.fromToEvent}>
                      <ClockIcon />
                      <span className={s.time}>{getTime(item.startDate, item.endDate)}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div>No events found :(</div>
          )}
        </div>
      </div>
    );
  }
}

Events.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape()),
  cities: PropTypes.arrayOf(PropTypes.shape()),
  toggleModal: PropTypes.func.isRequired,
  cancelEvent: PropTypes.func.isRequired
};

Events.defaultProps = {
  events: [],
  cities: []
};

export default Events;
