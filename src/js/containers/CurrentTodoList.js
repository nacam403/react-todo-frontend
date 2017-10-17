import { connect } from 'react-redux';

import TodoList from '../components/TodoList';
import Actions from '../actions';

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClickDone: id => dispatch(Actions.toggleTodoDone(id)),
    onClickEdit: id => dispatch(Actions.startEditTodo(id)),
    onClickSave: (id, description) => dispatch(Actions.finishEditTodo(id, description)),
    onClickDelete: id => dispatch(Actions.deleteTodo(id))
  };
};

const CurrentTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default CurrentTodoList;
