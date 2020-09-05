import React from 'react';
import PropTypes from 'prop-types';

import Button from 'Components/FormFields/Button/Button';
import s from './Modal.scss';

const Modal = ({ handleClose, show, children }) => {
  return (
    <div className={` ${s.modal} ${show ? s.displayBlock : s.displayNone}`}>
      <section className={s.modalMain}>
        {children}

        <div className={s.cancelBtn}>
          <Button onClick={handleClose}>Cancel</Button>
        </div>
      </section>
    </div>
  );
};

Modal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
};

export default Modal;
