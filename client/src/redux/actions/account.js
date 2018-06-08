export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';
export const DELETE_ACCOUNT = 'DELETE_ACCOUNT';

export const signIn = () => {
  return {
    type: SIGN_IN,
    payload: {
      loggedIn: true,
      imageURL: 'https://profile.actionsprout.com/default.jpeg',
      displayName: 'Aly M.'
    }
  }
}