import { GET_EVENTS_LOADING, GET_EVENTS_SUCCESS, GET_EVENTS_FAILURE } from '../constants/index';

export const getEventsLoading = bool => ({
  type: GET_EVENTS_LOADING,
  isLoading: bool
});

export const getEventsSuccess = data => ({
  type: GET_EVENTS_SUCCESS,
  data
});

export const getEventsFailure = error => ({
  type: GET_EVENTS_FAILURE,
  error
});
