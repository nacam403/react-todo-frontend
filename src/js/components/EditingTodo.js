import React from 'react';
import PropTypes from 'prop-types';

const EditingTodo = ({ description, done, onClickSave }) => {
  let textInput;

  return (
    <li>
      <input type="checkbox" defaultChecked={done} disabled />
      <input type="text" defaultValue={description} ref={node => textInput = node} />
      <button onClick={() => onClickSave(textInput.value)}>save</button>
      <button disabled>delete</button>
    </li>
  );
};

EditingTodo.propTypes = {
  description: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  onClickSave: PropTypes.func.isRequired
};

export default EditingTodo;
