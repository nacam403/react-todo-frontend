const actions = {
  fetchTodos: () => {
    return dispatch => {
      const fakePromise = new Promise(resolve => {
        resolve([
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
        ]);
      });

      fakePromise.then(todos => {
        dispatch({
          type: 'FETCH_TODOS',
          todos
        });
      });
      return fakePromise;
    };
  },

  addTodo: description => {
    return dispatch => {
      const fakePromise = new Promise(resolve => {
        resolve({ id: new Date().getTime() });
      });

      fakePromise.then(({ id }) => {
        dispatch({
          type: 'ADD_TODO',
          todo: {
            id,
            description,
            done: false
          }
        });
      });
      return fakePromise;
    };
  },

  startEditTodo: id => {
    return {
      type: 'START_EDIT_TODO',
      id
    };
  },

  updateTodo: todo => {
    return dispatch => {
      const fakePromise = new Promise(resolve => {
        resolve({});
      });

      fakePromise.then(() => {
        dispatch({
          type: 'UPDATE_TODO',
          todo
        });
      });
      return fakePromise;
    };
  },

  deleteTodo: id => {
    return dispatch => {
      const fakePromise = new Promise(resolve => {
        resolve({});
      });

      fakePromise.then(() => {
        dispatch({
          type: 'DELETE_TODO',
          id
        });
      });
      return fakePromise;
    };
  }
};

export default actions;
