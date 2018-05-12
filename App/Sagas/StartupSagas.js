import { put, select } from 'redux-saga/effects'
import GithubActions from '../Redux/GithubRedux'
import { is } from 'ramda'

// process STARTUP actions
export function * startup (action) {

  const avatar = yield select(state => state.github.avatar)
  // only get if we don't have it yet
  if (! is(String, avatar)) {
    yield put(GithubActions.userRequest('GantMan'))
  }
}
