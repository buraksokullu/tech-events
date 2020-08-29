import { SHOW_MODAL, HIDE_MODAL } from '../../constants/index';

export const showCustomModal = id => ({
  type: SHOW_MODAL,
  id
});

export const hideCustomModal = id => ({
  type: HIDE_MODAL,
  id
});
