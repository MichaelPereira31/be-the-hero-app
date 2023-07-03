import { Axios, AxiosRequestConfig } from 'axios'

import { HTTP_METHODS, IClient } from '../@types/client'

class AxiosClient extends Axios implements IClient {
  baseURL: string
  token?: string
  methods: HTTP_METHODS[]

  constructor(baseURL: string) {
    const _config: AxiosRequestConfig = {
      baseURL,
      transformResponse: [(res) => JSON.parse(res)]
    }
    super(_config)

    this.baseURL = baseURL
  }

  updateAuthToken(_token: string) {
    this.token = _token
  }
}

export default AxiosClient
