import { combineReducers } from 'redux-immutable';
import { reducer as toastrReducer } from 'react-redux-toastr';
import eventsReducer from './eventsReducer';
import citiesReducer from './citiesReducer';

const rootReducer = combineReducers({
  toastr: toastrReducer,
  events: eventsReducer,
  cities: citiesReducer
});

export default rootReducer;
