import Immutable from 'seamless-immutable'
import co from 'co'
import axios from 'axios'

const baseURL = 'https://jogging-time.vedmant.com/api/v1'

/* ------------- Types and Action ------------- */

export default {

  checkLogin: () => {
    return (dispatch, getState) => {
      return co(function* () {
        dispatch({type: 'CHECK_LOGIN'})

        const {accessToken} = getState()
        if (! accessToken) {
          dispatch({type: 'CHECK_LOGIN_FAIL'})
          throw new Error('No access token stored')
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
          const response = axios.post(baseURL + '/auth/login', credentials)
          dispatch({type: 'LOGIN_OK', payload: response.data.user})
        } catch (error) {
          dispatch({type: 'LOGIN_FAIL', payload: error.response.data})
          throw error // Re-throw error so it can be caught from returned promise
        }
      })
    }
  },
}


/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  me: null,
  accessToken: null,
})

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case 'CHECK_LOGIN_OK':
      return state.merge({me: action.payload})

    case 'LOGIN_OK':
      return state.merge({me: action.payload})

    default:
      return state;
  }
}
