import FetchClient from '../utils/api/impl/fetch'

const api = new FetchClient('https://expensies-api.herokuapp.com')

export const setToken = (_token: string) => {
  api.updateAuthToken(`Bearer ${_token}`)
}

export const removeToken = () => {
  api.updateAuthToken('')
}

export default api
