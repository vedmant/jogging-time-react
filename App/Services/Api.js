// a library to wrap and simplify api calls
import apisauce from 'apisauce'
// import Secrets from 'react-native-config'

// TODO user variable from .env (fix the issue with react-native-config not loading .env variables)
const baseURL = 'https://jogging-time.vedmant.com/api/v1'

const api = apisauce.create({
  // base URL is read from the "constructor"
  baseURL,
  // here are some default headers
  headers: {
    'Cache-Control': 'no-cache',
  },
  // 10 second timeout...
  timeout: 10000,
})

export default {

  checkLogin: () => api.get('user/me'),

  login: (credentials) => api.post('auth/login', credentials),

  getRoot: () => api.get(''),

  getRate: () => api.get('rate_limit'),

  getUser: (username) => api.get('search/users', {q: username}),
}
