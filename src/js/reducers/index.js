const initialState = {
  todos: []
};

const reducer = (state = initialState, action) => {
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

  case 'START_EDIT_TODO':
    return {
      ...state,
      todos: state.todos.map(todo => (todo.id !== action.id) ? todo : { ...todo, editing: true })
    };

  case 'UPDATE_TODO':
    return {
      ...state,
      todos: state.todos.map(todo => (todo.id !== action.todo.id) ? todo : action.todo)
    };

  case 'DELETE_TODO':
    return {
      ...state,
      todos: state.todos.filter(todo => todo.id !== action.id)
    };

  default:
    return state;
  }
};

export default reducer;
