// @flow
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { addLocaleData } from 'react-intl';
import jaLocale from 'react-intl/locale-data/ja';
import enLocale from 'react-intl/locale-data/en';
import { Provider, intlReducer, updateIntl } from 'react-intl-redux';

import Reducer from './reducers';
import * as Actions from './actions';
import App from './components/App';
import jaMessages from './locales/ja';
import enMessages from './locales/en';

import '../scss/index.scss';

addLocaleData([...jaLocale, ...enLocale]);

const reducer = combineReducers({
  main: Reducer,
  intl: intlReducer
});

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
store.dispatch(updateIntl({
  // とりあえずハードコートで日本語。切り替えるUIは無し。
  locale: 'ja',
  messages: jaMessages
}));
store.dispatch(Actions.fetchTodos());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
