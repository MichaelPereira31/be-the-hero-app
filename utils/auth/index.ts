export interface IAuth {
  access_token: string | null
  refresh_token: string | null
}

const auth: IAuth = {
  access_token: null,
  refresh_token: null
}

export default auth
