// @flow
import type { Todo, Action, ThunkAction } from '../types';

const restBaseUrl = (() => {
  if (process.env.NODE_ENV === 'production') {
    return '/rest/todos';
  }
  return '/todos';
})();

export function fetchTodos(): ThunkAction {
  return async dispatch => {
    const response = await fetch(restBaseUrl);
    const json = await response.json();
    dispatch({
      type: 'FETCH_TODOS',
      todos: json,
    });
  };
}

export function addTodo(description: string): ThunkAction {
  return async dispatch => {
    const response = await fetch(restBaseUrl, {
      method: 'POST',
      body: JSON.stringify({ description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = await response.json();
    dispatch({
      type: 'ADD_TODO',
      todo: {
        id: json.id,
        description,
        done: false,
      },
    });
  };
}

export function startEditTodo(id: number): Action {
  return {
    type: 'START_EDIT_TODO',
    id,
  };
}

export function updateTodo(todo: Todo): ThunkAction {
  return async dispatch => {
    await fetch(`${restBaseUrl}/${todo.id}`, {
      method: 'PUT',
      body: JSON.stringify(todo),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    dispatch({
      type: 'UPDATE_TODO',
      todo,
    });
  };
}

export function deleteTodo(id: number): ThunkAction {
  return async dispatch => {
    await fetch(`${restBaseUrl}/${id}`, {
      method: 'DELETE',
    });
    dispatch({
      type: 'DELETE_TODO',
      id,
    });
  };
}
