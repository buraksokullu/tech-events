import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { getEvents, getCities } from 'Store/api/TrivagoApi';
import EventTypeEnums from 'Model/index';
import { eventsSelector, citiesSelector } from 'App/store/selectors/index';
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
      selectedIds: [],
      citiesState: [],
      selectedEvents: [],
      allEvents: []
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
      allEvents: newArr,
      selectedEvents: newArr,
      citiesState: cities,
      selectedIds: selectedEventIdsStore || []
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

  updateEventStatus = selectedIds => {
    const { allEvents } = this.state;
    const newArr = allEvents.map(v => ({
      ...v,
      isSelected: !!selectedIds.includes(v.id)
    }));

    localStorage.setItem('selectedEvents', JSON.stringify(selectedIds));

    this.setState({
      selectedEvents: newArr,
      allEvents: newArr
    });
  };

  signUpToEvent = () => {
    const { selectedId, selectedIds } = this.state;
    selectedIds.push(selectedId);
    this.updateEventStatus(selectedIds);
    toastr.success('You have been registered to the event!');
    this.toggleModal();
  };

  cancelEvent = id => {
    const { selectedIds } = this.state;

    const arrIndex = selectedIds.indexOf(id);
    selectedIds.splice(arrIndex, 1);
    this.updateEventStatus(selectedIds);
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
