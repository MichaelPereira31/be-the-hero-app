import api from "@/services";
import { TResponse } from "../@types/response";
import { IHeaders } from "../@types/request";
import { IUserType } from "../user/create";

export interface ILoginPayload {
  email: string;
  password: string;
}

export interface ILoginResponse extends TResponse {
  data: {
    token: string;
    isComplete: boolean;
    type: IUserType;
    userId: string;
  };
}

const login = async (payload: ILoginPayload, headers?: IHeaders) => {
  return await api.post<ILoginResponse>("/user/authenticate", payload, {
    headers: headers,
  });
};

export default login;
