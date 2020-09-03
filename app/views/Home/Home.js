import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { getEvents, getCities } from 'Store/api/TrivagoApi';
import Layout from 'Components/Layout/Layout';
import { eventsSelector, citiesSelector } from 'App/store/selectors/index';

import Modal from 'Components/Modal/Modal';
import Dashboard from '../Dashboard/Dashboard';
import Aside from '../../components/Layout/Aside/Aside';

import s from './Home.scss';

export class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      eventName: '',
      selectedIds: [],
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
    const selectedEventIdsStore = JSON.parse(localStorage.getItem('selectedEvents'));

    const newArr = events.map(v => ({
      ...v,
      isSelected: selectedEventIdsStore ? !!selectedEventIdsStore.includes(v.id) : false
    }));

    this.setState({
      events: newArr,
      cities,
      selectedIds: selectedEventIdsStore || []
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

  toggleModal = (id, eventName) => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
      eventName,
      selectedId: id
    }));
  };

  updateEventStatus = selectedIds => {
    const { events } = this.state;
    const newArr = events.map(v => ({
      ...v,
      isSelected: !!selectedIds.includes(v.id)
    }));

    localStorage.setItem('selectedEvents', JSON.stringify(selectedIds));

    this.setState({
      events: newArr
    });
  };

  signUpToEvent = () => {
    const { selectedId, selectedIds } = this.state;
    selectedIds.push(selectedId);
    this.updateEventStatus(selectedIds);

    this.toggleModal();
  };

  cancelEvent = id => {
    const { selectedIds } = this.state;

    const arrIndex = selectedIds.indexOf(id);
    selectedIds.splice(arrIndex, 1);

    this.updateEventStatus(selectedIds);
  };

  render() {
    const { events, cities, eventName, showModal } = this.state;
    return (
      <Layout>
        <Aside
          events={events}
          cities={cities}
          filterByName={this.filterByName}
          filterFreeEvents={this.filterFreeEvents}
        />
        <div className={s.childrenHolder}>
          <Dashboard
            events={events}
            cities={cities}
            toggleModal={this.toggleModal}
            signUpToEvent={this.signUpToEvent}
            cancelEvent={this.cancelEvent}
          />

          <Modal show={showModal} handleClose={this.toggleModal}>
            <span>
              Would you like to attend
              <strong>{eventName}</strong>
              event?
            </span>
            <div onClick={this.signUpToEvent}>Yes</div>
          </Modal>
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
