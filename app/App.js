/** Dependencies */
import React from 'react';
import { Router } from 'react-router';
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';
import ReduxToastr from 'react-redux-toastr';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';

/** Routing */
import history from 'Routes/history';
import RootRouter from 'Routes';

/** Stores */
import store from 'Store';

const App = () => (
  <div className="main">
    <Provider store={store}>
      <Router history={history}>
        <RootRouter />
        <ReduxToastr
          timeOut={60000}
          newestOnTop={false}
          preventDuplicates
          position="top-right"
          getState={state => state.get('toastr')}
          transitionIn="fadeIn"
          transitionOut="fadeOut"
          progressBar
          closeOnToastrClick
        />
      </Router>
    </Provider>
  </div>
);

export default hot(App);
