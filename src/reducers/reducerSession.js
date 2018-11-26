import Constants from '../constants';

const initialState = {
};

export const reducerSession = (state = initialState, action) => {
  switch (action.type) {
    case Constants.SET_SESSION:
      return action.user;
    case Constants.CLEAR_SESSION:
      return null;
    default:
      return state;
  }
}
