import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { matchUrlRegex } from 'Utils/helper';
import s from './Aside.scss';

const routes = [
  {
    id: 'dashboard',
    url: '/',
    text: 'Dashboard'
  },
  {
    id: 'contents',
    url: '/campaign-contents',
    text: 'İçerikler'
  }
];

const Aside = () => (
  <div className={s.sidebarHolder}>
    {routes.map(item => (
      <Link
        to={item.url}
        id={item.id}
        className={`${matchUrlRegex(item.url) ? s.active : ''} ${s.sidebarElement}`}
        key={item.id}
      >
        {item.text}
      </Link>
    ))}
  </div>
);

Aside.propTypes = {};
export default Aside;
