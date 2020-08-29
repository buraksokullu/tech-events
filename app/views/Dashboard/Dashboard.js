import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';

import { getEvents, getCities } from 'Store/api/TrivagoApi';
import Layout from 'Components/Layout/Layout';
import { eventsSelector, citiesSelector } from 'App/store/selectors/index';

export class Dashboard extends Component {
  componentDidMount() {
    const { getEvents, getCities } = this.props;
    getEvents();
    getCities();
  }

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
        <Layout>
          <div>
            {events &&
              events.length > 0 &&
              events.map(item => (
                <div className={''} key={item.id}>
                  {item.name}
                  {this.getCityName(item.city)}
                </div>
              ))}
          </div>
        </Layout>
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
)(Dashboard);
