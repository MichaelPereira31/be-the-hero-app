import api from '..'

const getExpensies = async (query = '') => {
  return await api.get(`/list/${query}`)
}

export default getExpensies
