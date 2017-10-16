import React from 'react';
import PropTypes from 'prop-types';

const EditingTodo = ({ description, done }) => (
  <li>
    <input type="checkbox" defaultChecked={done} disabled />
    <input type="text" defaultValue={description} />
    <button>save</button>
    <button disabled>delete</button>
  </li>
);

EditingTodo.propTypes = {
  description: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired  
};

export default EditingTodo;
