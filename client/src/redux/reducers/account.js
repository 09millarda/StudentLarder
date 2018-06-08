import { SIGN_IN } from './../actions/account';

const defaultState = {
  loggedIn: false,
  imageURL: '',
  displayName: ''
};

export const reducer = (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case SIGN_IN:
      return action.payload;
    default:
      return newState;
  }
}