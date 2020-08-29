import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header/Header';
import Aside from './Aside/Aside';
import s from './Layout.scss';

const Layout = ({ children }) => (
  <div>
    <Header />
    <div className={s.bodyHolder}>
      <Aside />
      <div className={s.childrenHolder}>{children}</div>
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
