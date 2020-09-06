import * as Constants from 'Store/constants/index';
import * as eventsActions from '../eventsActions';

describe('eventsActions', () => {
  it('getEventsLoading of eventsActions', () => {
    expect(eventsActions.getEventsLoading(true)).toEqual({
      type: Constants.GET_EVENTS_LOADING,
      isLoading: true
    });
  });

  it('getEventsSuccess of eventsActions', () => {
    expect(eventsActions.getEventsSuccess()).toEqual({
      type: Constants.GET_EVENTS_SUCCESS
    });
  });

  it('getEventsFailure of eventsActions', () => {
    expect(eventsActions.getEventsFailure('error')).toEqual({
      type: Constants.GET_EVENTS_FAILURE,
      error: 'error'
    });
  });
});
