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

  case 'TOGGLE_TODO_DONE':
    return Object.assign({}, state, {
      todos: state.todos.map(todo => {
        if (todo.id !== action.id) {
          return todo;
        }
        return Object.assign({}, todo, {
          done: !todo.done
        });
      })
    });

  case 'START_EDIT_TODO':
    return Object.assign({}, state, {
      todos: state.todos.map(todo => {
        if (todo.id !== action.id) {
          return todo;
        }
        return Object.assign({}, todo, { editing: true });
      })
    });

  case 'FINISH_EDIT_TODO':
    return Object.assign({}, state, {
      todos: state.todos.map(todo => {
        if (todo.id !== action.id) {
          return todo;
        }
        return Object.assign({}, todo, {
          editing: false,
          description: action.description
        });
      })
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
