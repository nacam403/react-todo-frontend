const initialState = {
  todos: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case 'FETCH_TODOS':
    return Object.assign({}, state, {
      todos: action.todos
    });

  case 'ADD_TODO':
    return Object.assign({}, state, {
      todos: [
        ...state.todos,
        action.todo
      ]
    });

  case 'START_EDIT_TODO':
    return Object.assign({}, state, {
      todos: state.todos.map(todo => (todo.id !== action.id) ? todo : Object.assign({}, todo, { editing: true }))
    });

  case 'UPDATE_TODO':
    return Object.assign({}, state, {
      todos: state.todos.map(todo => (todo.id !== action.todo.id) ? todo : action.todo)
    });

  case 'DELETE_TODO':
    return Object.assign({}, state, {
      todos: state.todos.filter(todo => todo.id !== action.id)
    });

  default:
    return state;
  }
};

export default reducer;
