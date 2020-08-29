import { fromJS } from 'immutable';
import { GET_CITIES_LOADING, GET_CITIES_SUCCESS, GET_CITIES_FAILURE } from '../constants/index';

export const initialState = fromJS({
  citiesLoading: true,
  cities: null,
  citiesError: null
});

const citisReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CITIES_LOADING:
      return state.set('citiesLoading', fromJS(action.isLoading));
    case GET_CITIES_SUCCESS:
      return state.set('cities', fromJS(action.data)).set('citiesLoading', fromJS(false));
    case GET_CITIES_FAILURE:
      return state.set('citiesError', fromJS(action.error)).set('citiesLoading', fromJS(false));
    default:
      return state;
  }
};

export default citisReducer;
