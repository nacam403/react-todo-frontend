// @flow
import { connect } from 'react-redux';

import TodoList from '../components/TodoList';
import * as Actions from '../actions';
import type { Todo } from '../types';

const mapStateToProps = state => {
  return {
    todos: state.main.todos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClickDone: (todo: Todo) => dispatch(Actions.updateTodo(todo)),
    onClickEdit: (id: number) => dispatch(Actions.startEditTodo(id)),
    onClickSave: (todo: Todo) => dispatch(Actions.updateTodo(todo)),
    onClickDelete: (id: number) => dispatch(Actions.deleteTodo(id))
  };
};

const CurrentTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default CurrentTodoList;
