import React from 'react';
import PropTypes from 'prop-types';

import Todo from './Todo';
import EditingTodo from './EditingTodo';

const TodoList = ({ todos, onClickDone, onClickEdit, onClickSave, onClickDelete }) => (
  <ul>
    {todos.map(todo => todo.editing ? (
      <EditingTodo key={todo.id} {...todo}
        onClickSave={description => onClickSave(description, editing: false, ...todo })} />
    ) : (
      <Todo key={todo.id} {...todo}
        onClickDone={() => onClickDone({ done: !todo.done, ...todo })}
        onClickEdit={() => onClickEdit(todo.id)}
        onClickDelete={() => onClickDelete(todo.id)} />
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
  ).isRequired,
  onClickDone: PropTypes.func.isRequired,
  onClickEdit: PropTypes.func.isRequired,
  onClickSave: PropTypes.func.isRequired,
  onClickDelete: PropTypes.func.isRequired
};

export default TodoList;
