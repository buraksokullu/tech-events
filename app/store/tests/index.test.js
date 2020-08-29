import * as Redux from 'redux';
import store from '../index';

jest.mock('redux', () => ({
  createStore: jest.fn(),
  applyMiddleware: jest.fn(),
  compose: jest.fn().mockReturnValue('composedFunc')
}));

jest.mock('redux-thunk', () => 'THUNK');
jest.mock('redux-logger', () => 'REDUX_LOGGER');
jest.mock('Store/reducers', () => 'REDUCERS');

describe('Store', () => {
  it('Store', () => {
    // eslint-disable-next-line no-unused-vars
    const dumStore = store;

    expect(Redux.createStore).toHaveBeenCalledWith('REDUCERS', 'composedFunc');
    expect(Redux.applyMiddleware).toHaveBeenCalledWith('THUNK', 'REDUX_LOGGER');
  });
});
