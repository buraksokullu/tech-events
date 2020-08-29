import React from 'react';
import PropTypes from 'prop-types';

/** Libraries */
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

/** Store */
import { hideCustomModal, showCustomModal } from 'Store/actions/index';
import { customModalsSelector } from 'Store/selectors/index';

/** Cosmos */

import s from './CustomModal.scss';

const CustomModal = ({ children, id, hideCustomModal, customModals }) => (
  <>
    {customModals && customModals[id] ? (
      <div className={s.customModalHolder} id={id}>
        <div className={s.customModalWrapper}>
          <div className={s.closeIconHolder} onClick={hideCustomModal} role="presentation">
            {/* <CircleButton icon={<DismissIcon />} /> */}
          </div>
          <div className={s.contentHolder}>{children}</div>
        </div>
      </div>
    ) : (
      <div />
    )}
  </>
);
CustomModal.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  hideCustomModal: PropTypes.func.isRequired,
  customModals: PropTypes.shape().isRequired
};

CustomModal.defaultProps = {};

const mapStateToProps = createStructuredSelector({
  customModals: customModalsSelector
});

export const mapDispatchToProps = (dispatch, ownProps) => ({
  hideCustomModal: () => dispatch(hideCustomModal(ownProps.id)),
  showCustomModal: () => dispatch(showCustomModal(ownProps.id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomModal);
