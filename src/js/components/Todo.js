import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ description, done, onClickDone, onClickEdit, onClickDelete }) => (
  <li style={{
    color: done ? '#bbbbbb' : 'black'
  }}>
    <input type="checkbox" defaultChecked={done} onClick={onClickDone} />
    <span>{description}</span>
    <button onClick={onClickEdit}>edit</button>
    <button onClick={onClickDelete}>delete</button>
  </li>
);

Todo.propTypes = {
  description: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  onClickDone: PropTypes.func.isRequired,
  onClickEdit: PropTypes.func.isRequired,
  onClickDelete: PropTypes.func.isRequired
};

export default Todo;
