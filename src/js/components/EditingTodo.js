// @flow
import React from 'react';
import { FormattedMessage } from 'react-intl';

type Props = {
  description: string,
  done: boolean,
  onClickSave: (text: string) => void,
};

const EditingTodo = ({ description, done, onClickSave }: Props) => {
  let textInput: ?HTMLInputElement;

  return (
    <li>
      <input type="checkbox" defaultChecked={done} disabled />
      <input type="text" defaultValue={description} ref={node => textInput = node} />
      <button onClick={() => onClickSave(textInput ? textInput.value : '')}><FormattedMessage id="save" /></button>
      <button disabled><FormattedMessage id="delete" /></button>
    </li>
  );
};

export default EditingTodo;
