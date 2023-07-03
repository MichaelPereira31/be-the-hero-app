import { TResponse } from '../../@types/response'
export interface IAuthResponse extends TResponse {
  auth: {
    access_token: string
    refresh_token: string
  }
}
