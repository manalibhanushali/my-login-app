import { takeLatest, put, call } from 'redux-saga/effects';
import { loginApi } from '../api';
import { loginSuccess, loginFailure } from '../actions';

function* loginSaga(action) {
  try {
    const { user } = yield call(loginApi, action.payload);
    yield put(loginSuccess(user));
  } catch (error) {
    yield put(loginFailure('Login failed. Please try again.'));
  }
}

function* rootSaga() {
  yield takeLatest('LOGIN', loginSaga);
}

export default rootSaga;
