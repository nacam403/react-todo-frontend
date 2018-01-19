// @flow
import type { Todo, Action } from '../types';

type State = {
  todos: Array<Todo>
};

const initialState: State = {
  todos: []
};

const reducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
  case 'FETCH_TODOS':
    return {
      ...state,
      todos: action.todos
    };

  case 'ADD_TODO':
    return {
      ...state,
      todos: [
        ...state.todos,
        action.todo
      ]
    };

  case 'START_EDIT_TODO': {
    const editId = action.id;
    return {
      ...state,
      todos: state.todos.map(todo => (todo.id !== editId) ? todo : { ...todo, editing: true })
    };
  }

  case 'UPDATE_TODO': {
    const updateTodo = action.todo;
    return {
      ...state,
      todos: state.todos.map(todo => (todo.id !== updateTodo.id) ? todo : updateTodo)
    };
  }

  case 'DELETE_TODO': {
    const deleteId = action.id;
    return {
      ...state,
      todos: state.todos.filter(todo => todo.id !== deleteId)
    };
  }

  default:
    return state;
  }
};

export default reducer;
