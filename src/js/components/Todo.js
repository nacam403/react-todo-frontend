import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';


const Todo = ({ description, done, onClickDone, onClickEdit, onClickDelete }) => (
  <li style={{
    color: done ? '#bbbbbb' : 'black'
  }}>
    <input type="checkbox" defaultChecked={done} onClick={onClickDone} />
    <span>{description}</span>
    <button onClick={onClickEdit}><FormattedMessage id="edit" /></button>
    <button onClick={onClickDelete}><FormattedMessage id="delete" /></button>
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
