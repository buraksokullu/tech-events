import * as Constants from 'Store/constants/index';
import * as citiesActions from '../citiesActions';

describe('citiesActions', () => {
  it('getCitiesLoading of citiesActions', () => {
    expect(citiesActions.getCitiesLoading(true)).toEqual({
      type: Constants.GET_CITIES_LOADING,
      isLoading: true
    });
  });

  it('getCitiesSuccess of citiesActions', () => {
    expect(citiesActions.getCitiesSuccess()).toEqual({
      type: Constants.GET_CITIES_SUCCESS
    });
  });

  it('getCitiesFailure of citiesActions', () => {
    expect(citiesActions.getCitiesFailure('error')).toEqual({
      type: Constants.GET_CITIES_FAILURE,
      error: 'error'
    });
  });
});
