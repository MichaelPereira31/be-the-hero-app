import api from "@/services";

export interface ILoginPayload {
  email: string;
  password: string;
}

export interface ILoginResponse {
  token: string;
  isComplete: boolean;
}

const login = async (payload: ILoginPayload) => {
  return await api.post<ILoginResponse>("/user/authenticate", payload);
};

export default login;
