import api from '..'
import { IAuthResponse } from './@types'
const login = async (email: string) => {
  return await api.post<IAuthResponse>('/auth/login', { email })
}

export default login
