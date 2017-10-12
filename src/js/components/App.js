import React from 'react';

import TodoList from './TodoList.js';
import TodoAdder from './TodoAdder.js';

const dummyTodoList = [
  {
    id: 1,
    description: 'description-1',
    done: false
  },
  {
    id: 2,
    description: 'description-2',
    done: true
  },
  {
    id: 3,
    description: 'description-3',
    done: false
  }
];

const App = () => (
  <div>
    <h1>Todo App</h1>
    <TodoAdder />
    <TodoList todos={dummyTodoList} />
  </div>
);

export default App;
