// @flow
import React from 'react';
import { FormattedMessage } from 'react-intl';

import type { Todo as TodoType } from '../types';

type Props = TodoType & {
  onClickDone: () => void,
  onClickEdit: () => void,
  onClickDelete: () => void,
};

const Todo = ({ description, done, onClickDone, onClickEdit, onClickDelete }: Props) => (
  <li style={{
    color: done ? '#bbbbbb' : 'black'
  }}>
    <input type="checkbox" defaultChecked={done} onClick={onClickDone} />
    <span>{description}</span>
    <button onClick={onClickEdit}><FormattedMessage id="edit" /></button>
    <button onClick={onClickDelete}><FormattedMessage id="delete" /></button>
  </li>
);

export default Todo;
