import { combineReducers } from 'redux-immutable';
import { reducer as formReducer } from 'redux-form/immutable';
import { reducer as toastrReducer } from 'react-redux-toastr';
import customModalReducer from './common/customModalReducer';
import eventsReducer from './eventsReducer';
import citiesReducer from './citiesReducer';

const rootReducer = combineReducers({
  form: formReducer,
  toastr: toastrReducer,
  customModal: customModalReducer,
  events: eventsReducer,
  cities: citiesReducer
});

export default rootReducer;
