import { fromJS } from 'immutable';
import { SHOW_MODAL, HIDE_MODAL } from '../../constants/index';

export const initialState = fromJS({
  modals: {}
});

const customModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return state.setIn(['modals', `${action.id}`], fromJS(true));
    case HIDE_MODAL:
      return state.setIn(['modals', `${action.id}`], fromJS(false));
    default:
      return state;
  }
};

export default customModalReducer;
