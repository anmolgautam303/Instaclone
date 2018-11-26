import { takeEvery, call } from 'redux-saga/effects';
import { auth, database } from '../services/Firebase';
import Constants from '../constants';

const registerFirebase = values => auth
  .createUserWithEmailAndPassword(values.email, values.password)
  .then(success => success.user.toJSON());


const registerIntoDatabase = ({ uid, email, username }) => database
  .ref(`users/${uid}`).set({
    username, email,
  });

const loginFirebase = ({ email, password }) => auth
  .signInWithEmailAndPassword(email, password)
  .then(success => success.user.toJSON());

function* sagaRegister(obj) {
  try {
    const registro = yield call(registerFirebase, obj.data);
    const { email, uid } = registro;
    const { data: { username } } = obj;
    yield call(registerIntoDatabase, { uid, email, username });
  } catch (error) {
    console.log(error);
  }
}

function* sagaLogin(obj) {
  try {
    const login = yield call(loginFirebase, obj.data);
    console.log(login);
  } catch (error) {
    console.log(error);
  }
}

export default function* mainFunction() {
  yield takeEvery(Constants.REGISTER, sagaRegister);
  yield takeEvery(Constants.LOGIN, sagaLogin);
}
