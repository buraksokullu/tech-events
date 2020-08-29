import { fromJS } from 'immutable';
import { GET_EVENTS_LOADING, GET_EVENTS_SUCCESS, GET_EVENTS_FAILURE } from '../constants/index';

export const initialState = fromJS({
  eventsLoading: true,
  events: null,
  eventsError: null
});

const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EVENTS_LOADING:
      return state.set('eventsLoading', fromJS(action.isLoading));
    case GET_EVENTS_SUCCESS:
      return state.set('events', fromJS(action.data)).set('eventsLoading', fromJS(false));
    case GET_EVENTS_FAILURE:
      return state.set('eventsError', fromJS(action.error)).set('eventsLoading', fromJS(false));
    default:
      return state;
  }
};

export default eventsReducer;
