import { createSelector } from 'reselect';

const customModalStateSelector = state => state.get('customModal').toJS();

const customModalsSelector = createSelector(
  customModalStateSelector,
  customModalState => customModalState && customModalState.modals
);

export { customModalStateSelector, customModalsSelector };
