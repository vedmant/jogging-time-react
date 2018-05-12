import { call, put } from 'redux-saga/effects'
import AuthActions from '../Redux/AuthRedux'

export function * checkLogin (api, action) {
  // make the call to the api
  const response = yield call(api.checkLogin)

  if (response.ok) {
    yield put(AuthActions.checkLoginOk(response.data))
  } else {
    yield put(AuthActions.checkLoginFail())
  }
}

export function * login (api, action) {
  // make the call to the api
  const response = yield call(api.login, action.credentials)

  if (response.ok) {
    yield put(AuthActions.loginOk(response.data))
  } else {
    yield put(AuthActions.loginFail())
  }
}
