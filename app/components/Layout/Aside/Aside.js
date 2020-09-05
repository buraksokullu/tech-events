import React, { Component } from 'react';

import Input from 'Components/FormFields/Input/Input';
import Checkbox from 'Components/FormFields/Checkbox/Checkbox';

import s from './Aside.scss';

export class Aside extends Component {
  changeName = event => {
    const { filterByName } = this.props;

    filterByName(event.target.value);
  };

  filterFreeEvents = event => {
    const { filterFreeEvents } = this.props;

    filterFreeEvents(event.target.checked);
  };

  render() {
    return (
      <div className={s.sidebarHolder}>
        <div className={s.title}>Find your event</div>
        <div className={s.searchInput}>
          <Input
            id="eventName"
            name="eventName"
            placeholder="Name"
            maxLength="50"
            onChange={this.changeName}
          />
        </div>

        <div className={s.chckFilter}>
          <Checkbox
            id="chckOnlyFree"
            name="chckOnlyFree"
            checked={false}
            onChange={this.filterFreeEvents}
            label={(
              <div>
                Only
                <span className={s.isFree}>Free</span>
              </div>
            )}
          />
        </div>
      </div>
    );
  }
}

export default Aside;
