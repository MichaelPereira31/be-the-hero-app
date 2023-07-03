export type HTTP_METHODS = 'get' | 'post' | 'patch' | 'put' | 'delete'

export interface IResponse<T> {
  status: number
  data: T
}

export interface IClient {
  baseURL?: string
  token?: string
  methods: HTTP_METHODS[]
  get<T>(url: string): Promise<IResponse<T>>
  post<T>(url: string, payload: unknown): Promise<IResponse<T>>
  patch<T>(url: string, payload: unknown): Promise<IResponse<T>>
  put<T>(url: string, payload: unknown): Promise<IResponse<T>>
  delete<T>(url: string): Promise<IResponse<T>>
  updateAuthToken(_token: string): void
}
