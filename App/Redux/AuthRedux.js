import Immutable from 'seamless-immutable'
import co from 'co'
import axios from 'axios'
import get from 'lodash-es/get'

const baseURL = 'https://running-time.vedmant.com/api/v1'


/* ========================================================================= *\
 * State and Reducers
\* ========================================================================= */

export const INITIAL_STATE = Immutable({
  me: null,
  accessToken: null,
})

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case 'CHECK_LOGIN_OK':
      return state.merge({me: action.payload})

    case 'LOGIN_OK':
      return state.merge({me: action.payload.user, accessToken: action.payload.access_token})

    case 'REGISTER_OK':
      return state.merge({me: action.payload.user, accessToken: action.payload.access_token})

    default:
      return state;
  }
}


/* ========================================================================= *\
 * Actions
\* ========================================================================= */

export default {

  checkLogin: () => {
    return (dispatch, getState) => {
      return co(function* () {
        dispatch({type: 'CHECK_LOGIN'})

        const {accessToken} = getState()
        if (! accessToken) {
          dispatch({type: 'CHECK_LOGIN_FAIL', payload: 'No access token stored'})
        }

        try {
          const response = yield axios.post(baseURL + '/auth/me')
          dispatch({type: 'CHECK_LOGIN_OK', payload: response.data})
        } catch (error) {
          dispatch({type: 'CHECK_LOGIN_FAIL', payload: error.response.data})
          throw error // Re-throw error so it can be caught from returned promise
        }
      })
    }
  },

  login: (credentials) => {
    return (dispatch) => {
      return co(function* () {
        dispatch({type: 'LOGIN'})

        try {
          const response = yield axios.post(baseURL + '/auth/login', credentials)
          dispatch({type: 'LOGIN_OK', payload: response.data})
        } catch (error) {
          dispatch({type: 'LOGIN_FAIL', payload: get(error, 'response.data')})
          throw error // Re-throw error so it can be caught from returned promise
        }
      })
    }
  },

  register: (data) => {
    return (dispatch) => {
      return co(function* () {
        dispatch({type: 'REGISTER'})

        try {
          const response = yield axios.post(baseURL + '/auth/register', data)
          dispatch({type: 'REGISTER_OK', payload: response.data})
        } catch (error) {
          dispatch({type: 'REGISTER_FAIL', payload: error.response.data})
          throw error // Re-throw error so it can be caught from returned promise
        }
      })
    }
  },
}
