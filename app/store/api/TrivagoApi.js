import TrivagoLocalService from 'Services/index';
import {
  getEventsLoading,
  getEventsSuccess,
  getEventsFailure,
  getCitiesLoading,
  getCitiesSuccess,
  getCitiesFailure
} from '../actions/index';

export const getEvents = () => async dispatch => {
  await new Promise((resolve, reject) => {
    dispatch(getEventsLoading(true));
    TrivagoLocalService.getEvents()
      .then(response => {
        dispatch(getEventsSuccess(response.data));
        resolve();
      })
      .catch(error => {
        dispatch(getEventsFailure(error));
        reject();
      });
  });
};

export const getCities = () => async dispatch => {
  await new Promise((resolve, reject) => {
    dispatch(getCitiesLoading(true));
    TrivagoLocalService.getCities()
      .then(response => {
        dispatch(getCitiesSuccess(response.data));
        resolve(response.data);
      })
      .catch(error => {
        dispatch(getCitiesFailure(error));
        reject();
      });
  });
};
