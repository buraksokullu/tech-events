/** Dependencies */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

/** Reducers */
import rootReducer from 'Store/reducers';

/** Redux Middleware */
let middleware = [thunk];

if (window.Config.NODE_ENV !== 'Production') {
  middleware = [...middleware, logger];
}

/* eslint-disable */
const composeEnhancers =
  window.Config.NODE_ENV !== 'Production' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
/* eslint-enable */
const enhancer = composeEnhancers(applyMiddleware(...middleware));

export default createStore(rootReducer, enhancer);
