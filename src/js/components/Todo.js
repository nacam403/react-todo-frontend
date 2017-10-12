import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ description, done }) => (
  <li style={{
    color: done ? '#bbbbbb' : 'black'
  }}>
    <input type="checkbox" />
    <span>{description}</span>
    <button>edit</button>
    <button>delete</button>
  </li>
);

Todo.propTypes = {
  description: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired
};

export default Todo;
