import { combineReducers } from 'redux-immutable';
import { reducer as formReducer } from 'redux-form/immutable';
import { reducer as toastrReducer } from 'react-redux-toastr';
import eventsReducer from './eventsReducer';
import citiesReducer from './citiesReducer';

const rootReducer = combineReducers({
  form: formReducer,
  toastr: toastrReducer,
  events: eventsReducer,
  cities: citiesReducer
});

export default rootReducer;
