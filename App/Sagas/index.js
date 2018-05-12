import { all, takeLatest } from 'redux-saga/effects'
import api from '../Services/Api'

/* ------------- Types ------------- */

import { StartupTypes } from '../Redux/StartupRedux'
import { AuthTypes } from '../Redux/AuthRedux'

/* ------------- Sagas ------------- */

import { startup } from './StartupSagas'
import { checkLogin, login } from './AuthSagas'

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield all([
    // some sagas only receive an action
    takeLatest(StartupTypes.STARTUP, startup),

    // some sagas receive extra parameters in addition to an action
    takeLatest(AuthTypes.CHECK_LOGIN, checkLogin, api),

    takeLatest(AuthTypes.LOGIN, login, api),
  ])
}
