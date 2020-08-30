import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './Header/Header';
import s from './Layout.scss';

export class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Header />
        <div className={s.bodyHolder}>{children}</div>
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
