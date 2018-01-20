// @flow
import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import * as Actions from '../actions';

type Props = {
  onAddClick: (description: string) => void
};

const TodoAdderImpl = ({ onAddClick }: Props) => {
  let textInput: ?HTMLInputElement;

  return (
    <form>
      <input type="text" ref={node => textInput = node}></input>
      <button type="button" onClick={() => {
        onAddClick(textInput ? textInput.value : '');
      }}>
        <FormattedMessage id="add" />
      </button>
    </form>
  );
};

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    onAddClick: (description: string) => dispatch(Actions.addTodo(description))
  };
};

const TodoAdder = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoAdderImpl);

export default TodoAdder;
