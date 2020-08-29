import { createSelector } from 'reselect';

const globalStateSelector = state => state.get('global').toJS();

const tenantIdSelector = createSelector(
  globalStateSelector,
  globalState => globalState && globalState.tenantId
);

export { globalStateSelector, tenantIdSelector };
