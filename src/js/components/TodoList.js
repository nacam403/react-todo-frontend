// @flow
import React from 'react';
import type { ElementProps } from 'react';

import Todo from './Todo';
import EditingTodo from './EditingTodo';

type Props = {
  todos: Array<ElementProps<typeof Todo>>,
  onClickDone: (todo: ElementProps<typeof Todo>) => void,
  onClickSave: (todo: ElementProps<typeof Todo>) => void,
  onClickEdit: (todoId: number) => void,
  onClickDelete: (todoId: number) => void,
};

const TodoList = ({ todos, onClickDone, onClickEdit, onClickSave, onClickDelete }: Props) => (
  <ul>
    {todos.map((todo) => todo.editing ? (
      <EditingTodo key={todo.id} {...todo}
        onClickSave={description => onClickSave({...todo, description, editing: false })} />
    ) : (
      <Todo key={todo.id} {...todo}
        onClickDone={() => onClickDone({ ...todo, done: !todo.done })}
        onClickEdit={() => onClickEdit(todo.id)}
        onClickDelete={() => onClickDelete(todo.id)} />
    ))}
  </ul>
);

export default TodoList;
