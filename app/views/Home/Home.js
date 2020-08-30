import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { getEvents, getCities } from 'Store/api/TrivagoApi';
import Layout from 'Components/Layout/Layout';
import { eventsSelector, citiesSelector } from 'App/store/selectors/index';

import Dashboard from '../Dashboard/Dashboard';
import Aside from '../../components/Layout/Aside/Aside';

import s from './Home.scss';

export class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cities: [],
      events: []
    };
  }

  componentDidMount() {
    const { getEvents, getCities } = this.props;
    getEvents();
    getCities();
  }

  componentDidUpdate(prevProps) {
    const { events } = this.props;
    if (events !== prevProps.events) {
      this.setData(events);
    }
  }

  setData = events => {
    const { cities } = this.props;
    this.setState({
      events,
      cities
    });
  };

  filterByName = data => {
    const { events } = this.props;
    const filteredEvents = events.filter(ev => ev.name.toLowerCase().includes(data.toLowerCase()));

    this.setState({
      events: filteredEvents
    });
  };

  filterFreeEvents = data => {
    const { events } = this.props;

    const filteredEvents = data ? events.filter(ev => ev.isFree === true) : events;

    this.setState({
      events: filteredEvents
    });
  };

  render() {
    const { events, cities } = this.state;
    return (
      <Layout>
        <Aside
          events={events}
          cities={cities}
          filterByName={this.filterByName}
          filterFreeEvents={this.filterFreeEvents}
        />
        <div className={s.childrenHolder}>
          <Dashboard events={events} cities={cities} />
        </div>
      </Layout>
    );
  }
}

Home.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape()),
  cities: PropTypes.arrayOf(PropTypes.shape()),
  getEvents: PropTypes.func.isRequired,
  getCities: PropTypes.func.isRequired
};

Home.defaultProps = {
  events: [],
  cities: []
};

const mapStateToProps = createStructuredSelector({
  events: eventsSelector,
  cities: citiesSelector
});

export const mapDispatchToProps = dispatch => ({
  getEvents: () => dispatch(getEvents()),
  getCities: () => dispatch(getCities())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
