import assert from 'assert';

import reducer from '../../src/js/reducers/';

describe('reducer', function() {
  it('should return initial state', function() {
    assert.deepEqual(reducer(undefined, {}), {
      todos: []
    });
  });

  it('should hundle FETCH_TODOS', function() {
    let state;
    let todos = [];

    state = reducer(state, {
      type: 'FETCH_TODOS',
      todos
    });
    assert.deepEqual(state, { todos });

    todos = [
      {
        id: 1,
        description: 'todo-1',
        done: false
      }
    ];
    state = reducer(state, {
      type: 'FETCH_TODOS',
      todos
    });
    assert.deepEqual(state, { todos });
  });

  it('should hundle ADD_TODO', function() {
    let state;
    const expectedTodos = [];

    const addAndAssert = (newTodo) => {
      state = reducer(state, {
        type: 'ADD_TODO',
        todo: newTodo
      });
      expectedTodos.push(newTodo);
      assert.deepEqual(state, { todos: expectedTodos });
    };

    addAndAssert({
      id: 1,
      description: 'todo-1',
      done: false
    });
    addAndAssert({
      id: 2,
      description: 'todo-2',
      done: true
    });
  });

  it('should hundle START_EDIT_TODO', function() {
    let state = {
      todos: [
        {
          id: 1,
          description: 'todo-1',
          done: false
        },
        {
          id: 2,
          description: 'todo-2',
          done: true,
          editing: true
        }
      ]
    };

    state = reducer(state, {
      type: 'START_EDIT_TODO',
      id: 1
    });
    assert.deepEqual(state, {
      todos: [
        {
          id: 1,
          description: 'todo-1',
          done: false,
          editing: true
        },
        {
          id: 2,
          description: 'todo-2',
          done: true,
          editing: true
        }
      ]
    });

  });

  it('should hundle UPDATE_TODO', function() {
    let state = {
      todos: [
        {
          id: 1,
          description: 'todo-1',
          done: false
        },
        {
          id: 2,
          description: 'todo-2',
          done: true
        }
      ]
    };

    state = reducer(state, {
      type: 'UPDATE_TODO',
      id: 1,
      todo: {
        id: 1,
        description: 'todo-1-x',
        done: true
      }
    });
    assert.deepEqual(state, {
      todos: [
        {
          id: 1,
          description: 'todo-1-x',
          done: true
        },
        {
          id: 2,
          description: 'todo-2',
          done: true
        }
      ]
    });
  });

  it('should hundle DELETE_TODO', function() {
    let state = {
      todos: [
        {
          id: 1,
          description: 'todo-1',
          done: false
        },
        {
          id: 2,
          description: 'todo-2',
          done: true
        }
      ]
    };

    state = reducer(state, {
      type: 'DELETE_TODO',
      id: 1
    });
    assert.deepEqual(state, {
      todos: [
        {
          id: 2,
          description: 'todo-2',
          done: true
        }
      ]
    });

    state = reducer(state, {
      type: 'DELETE_TODO',
      id: 2
    });
    assert.deepEqual(state, {
      todos: []
    });
  });

});
