import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';


const EditingTodo = ({ description, done, onClickSave }) => {
  let textInput;

  return (
    <li>
      <input type="checkbox" defaultChecked={done} disabled />
      <input type="text" defaultValue={description} ref={node => textInput = node} />
      <button onClick={() => onClickSave(textInput.value)}><FormattedMessage id="save" /></button>
      <button disabled><FormattedMessage id="delete" /></button>
    </li>
  );
};

EditingTodo.propTypes = {
  description: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  onClickSave: PropTypes.func.isRequired
};

export default EditingTodo;
