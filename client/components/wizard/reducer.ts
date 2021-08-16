interface State {
  enteredName: string;
  message: string;
}

export const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'enteredName':
      if (state.enteredName === action.payload) {
        return state;
      }
      return {...state, enteredName: action.payload};

    case 'message':
      return {...state, message: action.payload};

    default:
      throw new Error('invalid action type: ' + action.type);
  }
};

export const initialState: State = {
  enteredName: '',
  message: '',
};
