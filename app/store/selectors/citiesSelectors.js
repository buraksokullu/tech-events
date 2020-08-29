import { createSelector } from 'reselect';

const citiesStateSelector = state => state.get('cities').toJS();

const citiesSelector = createSelector(
  citiesStateSelector,
  citieState => citieState && citieState.cities
);

const citiesLoadingSelector = createSelector(
  citiesStateSelector,
  citieState => citieState && citieState.citieLoading
);

export { citiesSelector, citiesLoadingSelector };
