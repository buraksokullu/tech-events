import { GET_CITIES_LOADING, GET_CITIES_SUCCESS, GET_CITIES_FAILURE } from '../constants/index';

export const getCitiesLoading = bool => ({
  type: GET_CITIES_LOADING,
  isLoading: bool
});

export const getCitiesSuccess = data => ({
  type: GET_CITIES_SUCCESS,
  data
});

export const getCitiesFailure = error => ({
  type: GET_CITIES_FAILURE,
  error
});
