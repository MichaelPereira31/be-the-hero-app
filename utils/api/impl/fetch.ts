import auth from '../../auth'
import { HTTP_METHODS, IClient, IResponse } from '../@types/client'

class FetchClient implements IClient {
  methods: HTTP_METHODS[]
  token: string
  baseURL: string

  constructor(baseURL: string, token?: string) {
    this.baseURL = baseURL
    this.token = token
  }

  updateAuthToken(_token: string): void {
    this.token = _token
  }

  async handleRequest<T>(
    url: string,
    method: string,
    body?: unknown
  ): Promise<IResponse<T>> {
    const config: RequestInit = {
      method: method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        authorization: `Bearer ${auth.access_token}`
      }
    }
    if (body) config.body = JSON.stringify(body)

    const request = new Request(this.baseURL + url, config)
    const response = await fetch(request).then((res: Response) => res.json())

    return {
      status: response?.status_code | 400,
      data: response
    }
  }

  async get<T>(url: string): Promise<IResponse<T>> {
    return await this.handleRequest<T>(url, 'get')
  }

  async post<T>(url: string, payload: unknown): Promise<IResponse<T>> {
    return await this.handleRequest<T>(url, 'post', payload)
  }

  async patch<T>(url: string, payload: unknown): Promise<IResponse<T>> {
    return await this.handleRequest<T>(url, 'patch', payload)
  }

  async put<T>(url: string, payload: unknown): Promise<IResponse<T>> {
    return await this.handleRequest<T>(url, 'put', payload)
  }

  async delete<T>(url: string): Promise<IResponse<T>> {
    return await this.handleRequest<T>(url, 'delete')
  }
}

export default FetchClient
