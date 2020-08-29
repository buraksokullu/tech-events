import React from 'react';
import s from './Header.scss';

const Header = () => (
  <div className={s.headerHolder}>
    <div className={s.logoMenu}>
      <a href="/" className={s.logo}>
        Trivago
      </a>
    </div>
  </div>
);

export default Header;
