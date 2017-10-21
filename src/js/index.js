import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import Reducer from './reducers';
import * as Actions from './actions';
import App from './components/App';

const store = createStore(Reducer, applyMiddleware(thunkMiddleware));
store.dispatch(Actions.fetchTodos());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
