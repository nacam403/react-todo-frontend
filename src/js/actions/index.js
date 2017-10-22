const restBaseUrl = 'http://localhost:9000/todos';

export function fetchTodos() {
  return async dispatch => {
    const response = await fetch(restBaseUrl);
    const json = await response.json();
    dispatch({
      type: 'FETCH_TODOS',
      todos: json
    });
  };
}

export function addTodo(description) {
  return async dispatch => {
    const response = await fetch(restBaseUrl, {
      mode: 'cors',
      method: 'POST',
      body: JSON.stringify({ description }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const json = await response.json();
    dispatch({
      type: 'ADD_TODO',
      todo: {
        id: json.id,
        description,
        done: false
      }
    });
  };
}

export function startEditTodo(id) {
  return {
    type: 'START_EDIT_TODO',
    id
  };
}

export function updateTodo(todo) {
  return async dispatch => {
    await fetch(`${restBaseUrl}/${todo.id}`, {
      mode: 'cors',
      method: 'PUT',
      body: JSON.stringify(todo),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    dispatch({
      type: 'UPDATE_TODO',
      todo
    });
  };
}

export function deleteTodo(id) {
  return async dispatch => {
    await fetch(`${restBaseUrl}/${id}`, {
      mode: 'cors',
      method: 'DELETE'
    });
    dispatch({
      type: 'DELETE_TODO',
      id
    });
  };
}
