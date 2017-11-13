import { connect } from 'react-redux';

import TodoList from '../components/TodoList';
import * as Actions from '../actions';

const mapStateToProps = state => {
  return {
    todos: state.main.todos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClickDone: todo => dispatch(Actions.updateTodo(todo)),
    onClickEdit: id => dispatch(Actions.startEditTodo(id)),
    onClickSave: todo => dispatch(Actions.updateTodo(todo)),
    onClickDelete: id => dispatch(Actions.deleteTodo(id))
  };
};

const CurrentTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default CurrentTodoList;
