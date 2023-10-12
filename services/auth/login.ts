import api from "@/services";
import { TResponse } from "../@types/response";

export interface ILoginPayload {
  email: string;
  password: string;
}

export interface ILoginResponse extends TResponse {
  data: {
    token: string;
    isComplete: boolean;
  };
}

const login = async (payload: ILoginPayload) => {
  return await api.post<ILoginResponse>("/user/authenticate", payload);
};

export default login;
