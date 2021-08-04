import {FC, useState, useEffect, useReducer} from 'react';
import classnames from 'classnames';

import Input from '@ui/input';

import {reducer, initialState} from '../../reducer';

interface WizardFormProps {
  className?: string;
}

const WizardForm: FC<WizardFormProps> = ({className, inputValue}) => {
  const [{message, enteredName}, dispatch] = useReducer(reducer, initialState);

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({type: 'enteredName', payload: e.target.value});
    dispatch({
      type: 'message',
      payload: !!e.target.value
        ? `Your name is – ${e.target.value}`
        : 'No name given',
    });
  };

  return (
    <div className={classnames(className)}>
      <div>{message}</div>
      <br />
      <form>
        <Input type="text" value={enteredName} onChange={onChangeName} />
      </form>
    </div>
  );
};

export default WizardForm;
