import { all, takeLatest } from 'redux-saga/effects'
import api from '../Services/Api'
import { StartupTypes } from '../Redux/StartupRedux'
import { GithubTypes } from '../Redux/GithubRedux'
import { startup } from './StartupSagas'
import { getUserAvatar } from './GithubSagas'

/* ------------- Types ------------- */

/* ------------- Sagas ------------- */

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield all([
    // some sagas only receive an action
    takeLatest(StartupTypes.STARTUP, startup),

    // some sagas receive extra parameters in addition to an action
    takeLatest(GithubTypes.USER_REQUEST, getUserAvatar, api),
  ])
}
