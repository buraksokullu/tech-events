/** Dependencies */
import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

/** Stylesheets */
import 'Assets/stylesheets/main.scss';

/** Components */
import App from './App';

/** React Dom Injection For Element */
ReactDOM.render(<App />, document.getElementById('root'));
