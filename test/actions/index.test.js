import 'babel-polyfill';
import assert from 'assert';
import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

import * as Actions from '../../src/js/actions';

const middlewares = [ thunkMiddleware ];
const mockStore = configureMockStore(middlewares);

describe('action creator', function() {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('should create FETCH_TODOS', async function() {
    const todos = [
      {
        id: 1,
        description: 'todo-1',
        done: false
      }
    ];

    fetchMock.getOnce('/todos', {
      body: todos,
      headers: { 'Content-Type': 'application/json' }
    });

    const store = mockStore({ todos: [] });
    await store.dispatch(Actions.fetchTodos());
    assert.deepEqual(store.getActions(), [
      {
        type: 'FETCH_TODOS',
        todos
      }
    ]);
  });

  it('should create ADD_TODO', async function() {
    const todo = {
      id: 1,
      description: 'todo-1',
      done: false
    };

    fetchMock.postOnce('/todos', {
      body: { id: todo.id },
      headers: { 'Content-Type': 'application/json' }
    });

    const store = mockStore({ todos: [] });
    await store.dispatch(Actions.addTodo(todo.description));
    assert.deepEqual(store.getActions(), [
      {
        type: 'ADD_TODO',
        todo
      }
    ]);
  });

  it('should create START_EDIT_TODO', function() {
    assert.deepEqual(Actions.startEditTodo(1), {
      type: 'START_EDIT_TODO',
      id: 1
    });
  });

  it('should create UPDATE_TODO', async function() {
    const todo = {
      id: 1,
      description: 'todo-1',
      done: true
    };

    fetchMock.putOnce(`/todos/${todo.id}`, 200);

    const store = mockStore({ todos: [] });
    await store.dispatch(Actions.updateTodo(todo));
    assert.deepEqual(store.getActions(), [
      {
        type: 'UPDATE_TODO',
        todo
      }
    ]);
  });

  it('should create DELETE_TODO', async function() {
    const id = 1;
    fetchMock.deleteOnce(`/todos/${id}`, 200);

    const store = mockStore({ todos: [] });
    await store.dispatch(Actions.deleteTodo(id));
    assert.deepEqual(store.getActions(), [
      {
        type: 'DELETE_TODO',
        id
      }
    ]);
  });
});
