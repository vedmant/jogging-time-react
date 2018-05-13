import { createActions, createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const {Types, Creators} = createActions({
  checkLogin: ['username'],
  checkLoginOk: null,
  checkLoginFail: ['error'],
  login: ['credentials'],
  loginOk: null,
  loginFail: ['error'],
})

export const AuthTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  me: null,
  accessToken: null,
  loginError: null,
})

/* ------------- Reducers ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CHECK_LOGIN_OK]: (state, action) => {
    return state.merge({me: action})
  },

  [Types.LOGIN_OK]: (state, action) => {
    return state.merge({me: action.user, loginError: null, accessToken: action.accessToken})
  },

  [Types.LOGIN_FAIL]: (state, action) => {
    return state.merge({loginError: action.error})
  },
})
