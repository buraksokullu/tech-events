import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { getEvents, getCities } from 'Store/api/index';
import EventTypeEnums from 'Model/index';
import { eventsSelector, citiesSelector } from 'Store/selectors/index';
import { toastr } from 'react-redux-toastr';

import Button from 'Components/FormFields/Button/Button';
import Modal from 'Components/Modal/Modal';
import Header from 'Components/Layout/Header/Header';
import Aside from 'Components/Layout/Aside/Aside';
import Events from '../Events/Events';

import s from './Home.scss';

export class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      eventName: '',
      registeredEvents: [],
      citiesState: [],
      selectedEvents: [],
      allEvents: []
    };
  }

  componentDidMount() {
    const { getCities } = this.props;
    getCities();
    this.getEvents();
  }

  getEvents = async () => {
    return new Promise(resolve => {
      const { getEvents } = this.props;

      getEvents().then(() => {
        this.setData();
        resolve();
      });
    });
  };

  setData = () => {
    const { cities, events } = this.props;
    const selectedEventIdsStore = JSON.parse(localStorage.getItem('selectedEvents'));

    const newArr = events.map(v => ({
      ...v,
      isSelected: selectedEventIdsStore ? !!selectedEventIdsStore.includes(v.id) : false
    }));

    this.setState({
      allEvents: newArr,
      selectedEvents: newArr,
      citiesState: cities,
      registeredEvents: selectedEventIdsStore || []
    });
  };

  filterByName = data => {
    const { selectedEvents, allEvents } = this.state;
    const filteredEvents = data
      ? selectedEvents.filter(ev => ev.name.toLowerCase().includes(data.toLowerCase()))
      : allEvents;

    this.setState({
      selectedEvents: filteredEvents
    });
  };

  filterFreeEvents = data => {
    const { selectedEvents, allEvents } = this.state;

    const filteredEvents = data ? selectedEvents.filter(ev => ev.isFree === true) : allEvents;

    this.setState({
      selectedEvents: filteredEvents
    });
  };

  toggleModal = (id, eventName) => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
      eventName,
      selectedId: id
    }));
  };

  updateEventStatus = registeredEvents => {
    const { allEvents } = this.state;
    const newArr = allEvents.map(v => ({
      ...v,
      isSelected: !!registeredEvents.includes(v.id)
    }));

    localStorage.setItem('selectedEvents', JSON.stringify(registeredEvents));

    this.setState({
      selectedEvents: newArr,
      allEvents: newArr
    });
  };

  signUpToEvent = () => {
    const { selectedId, registeredEvents } = this.state;
    registeredEvents.push(selectedId);
    this.updateEventStatus(registeredEvents);
    toastr.success('You have been registered to the event!');
    this.toggleModal();
  };

  cancelEvent = id => {
    const { registeredEvents } = this.state;

    const arrIndex = registeredEvents.indexOf(id);
    registeredEvents.splice(arrIndex, 1);
    this.updateEventStatus(registeredEvents);
    toastr.success('Event cancelled');
  };

  selectEventType = eventType => {
    const { allEvents } = this.state;

    const filteredEvents =
      eventType === EventTypeEnums.MY_EVENTS
        ? allEvents.filter(ev => ev.isSelected === true)
        : allEvents;

    this.setState({
      selectedEvents: filteredEvents
    });
  };

  render() {
    const { selectedEvents, citiesState, eventName, showModal } = this.state;
    return (
      <>
        <Header selectEventType={this.selectEventType} />
        <div className={s.bodyHolder}>
          <Aside filterByName={this.filterByName} filterFreeEvents={this.filterFreeEvents} />
          <div className={s.childrenHolder}>
            <Events
              events={selectedEvents}
              cities={citiesState}
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
              <Button onClick={this.signUpToEvent}>Yes</Button>
            </Modal>
          </div>
        </div>
      </>
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
