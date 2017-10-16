import React from 'react';
import PropTypes from 'prop-types';

import Todo from './Todo';
import EditingTodo from './EditingTodo';

const TodoList = ({ todos }) => (
  <ul>
    {todos.map(todo => todo.editing ? (
      <EditingTodo key={todo.id} {...todo} />
    ) : (
      <Todo key={todo.id} {...todo} />
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired,
      editing: PropTypes.bool
    }).isRequired
  ).isRequired
};

export default TodoList;
