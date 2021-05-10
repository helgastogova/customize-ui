import {createStore} from 'redux';

function emails(state = [], action) {
  switch (action.type) {
    case 'ADD_EMAIL':
      return state.concat([action.text]);
    default:
      return state;
  }
}

/* eslint-disable no-underscore-dangle */
const store = createStore(
  emails,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

store.dispatch({
  type: 'ADD_EMAIL',
  text: 'helgastogova@gmail.com',
});

export default store;
