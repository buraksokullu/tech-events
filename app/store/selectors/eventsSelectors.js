import { createSelector } from 'reselect';

const eventsStateSelector = state => state.get('events').toJS();

const eventsSelector = createSelector(
  eventsStateSelector,
  eventsState => eventsState && eventsState.events
);

const eventsLoadingSelector = createSelector(
  eventsStateSelector,
  eventsState => eventsState && eventsState.eventsLoading
);

export { eventsSelector, eventsLoadingSelector };
