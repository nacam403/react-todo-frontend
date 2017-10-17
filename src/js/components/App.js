import React from 'react';

import CurrentTodoList from '../containers/CurrentTodoList';
import TodoAdder from '../containers/TodoAdder';

const App = () => (
  <div>
    <h1>Todo App</h1>
    <TodoAdder />
    <CurrentTodoList />
  </div>
);

export default App;
