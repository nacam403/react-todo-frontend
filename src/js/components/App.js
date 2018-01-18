// @flow
import React from 'react';
import { FormattedMessage } from 'react-intl';

import CurrentTodoList from '../containers/CurrentTodoList';
import TodoAdder from '../containers/TodoAdder';

const App = () => (
  <div>
    <h1><FormattedMessage id="title" /></h1>
    <TodoAdder />
    <CurrentTodoList />
  </div>
);

export default App;
