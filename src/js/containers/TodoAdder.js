import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Actions from '../actions';

const TodoAdderImpl = ({ onAddClick }) => {
  let textInput;

  return (
    <form>
      <input type="text" ref={node => textInput = node}></input>
      <button type="button" onClick={() => {
        onAddClick(textInput.value);
      }}>add</button>
    </form>
  );
};

TodoAdderImpl.propTypes = {
  onAddClick: PropTypes.func.isRequired
};

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    onAddClick: description => dispatch(Actions.addTodo(description))
  };
};

const TodoAdder = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoAdderImpl);

export default TodoAdder;
