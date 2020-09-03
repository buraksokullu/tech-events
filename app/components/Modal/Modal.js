import React from 'react';
import s from './Modal.scss';

// eslint-disable-next-line react/prop-types
const Modal = ({ handleClose, show, children }) => {
  return (
    <div className={` ${s.modal} ${show ? s.displayBlock : s.displayNone}`}>
      <section className={s.modalMain}>
        {children}
        <button type="button" onClick={handleClose}>close</button>
      </section>
    </div>
  );
};

export default Modal;
