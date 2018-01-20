// @flow
export type Todo = {
  id: number,
  description: string,
  done: boolean,
  editing?: boolean,
};

type FetchTodosAction = { type: 'FETCH_TODOS', todos: Array<Todo> };
type AddTodoAction = { type: 'ADD_TODO', todo: Todo };
type StartEditTodoAction = { type: 'START_EDIT_TODO', id: number };
type UpdateTodoAction = { type: 'UPDATE_TODO', todo: Todo };
type DeleteTodoAction = { type: 'DELETE_TODO', id: number };

export type Action =
  | FetchTodosAction
  | AddTodoAction
  | StartEditTodoAction
  | UpdateTodoAction
  | DeleteTodoAction;

export type ThunkAction = (dispatch: Dispatch<Action>) => Promise<any>;
