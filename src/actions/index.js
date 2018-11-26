import Constants from '../constants';

export const registerAction = data => ({
  type: Constants.REGISTER,
  data,
});

export const loginAction = data => ({
  type: Constants.LOGIN,
  data,
});

export const setSessionAction = user => ({
  type: Constants.SET_SESSION,
  user,
});

export const clearSessionAction = () => ({
  type: Constants.CLEAR_SESSION,
});
