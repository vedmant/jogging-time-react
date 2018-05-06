import { createActions, createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const {Types, Creators} = createActions({
  userRequest: ['username'],
  userSuccess: ['avatar'],
  userFailure: null,
})

export const GithubTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  avatar: null,
  fetching: null,
  error: null,
  username: null,
})

/* ------------- Selectors ------------- */

export const GithubSelectors = {
  selectAvatar: state => state.github.avatar,
}

/* ------------- Reducers ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.USER_REQUEST]: (state, {username}) =>
    state.merge({fetching: true, username, avatar: null}),

  [Types.USER_SUCCESS]: (state, action) => {
    const {avatar} = action
    return state.merge({fetching: false, error: null, avatar})
  },

  [Types.USER_FAILURE]: (state) =>
    state.merge({fetching: false, error: true, avatar: null}),
})
