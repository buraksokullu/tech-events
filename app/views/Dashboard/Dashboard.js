import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { formatDate, getTime, getTimeDifference } from 'Utils/helper';

import s from './Dashboard.scss';

export class Dashboard extends Component {
  getCityName = id => {
    const { cities } = this.props;

    if (cities !== null) {
      return cities.find(x => x.id === id).name;
    }
    return '';
  };

  render() {
    const { events } = this.props;
    return (
      <div>
        <div className={s.dashboard}>
          {events &&
            events.length > 0 &&
            events.map(item => (
              <div className={s.event} key={item.id}>
                <div className={s.date}>{formatDate(item.startDate)}</div>
                <div className={s.item}>
                  <div className={s.firstRow}>
                    <div className={s.eventName}>
                      {item.isFree && <span className={s.isFree}> FREE </span>}
                      <strong className={s.name}>{item.name}</strong>
                    </div>
                    <div> Sign Up </div>
                  </div>
                  <div className={s.secondRow}>
                    <span className={s.cityName}>{this.getCityName(item.city)}</span>
                    <span className={s.timeDifferences}>
                      {getTimeDifference(item.startDate, item.endDate)}
                    </span>
                    <span className={s.time}>{getTime(item.startDate, item.endDate)}</span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape()),
  cities: PropTypes.arrayOf(PropTypes.shape())
};

Dashboard.defaultProps = {
  events: [],
  cities: []
};

export default Dashboard;
