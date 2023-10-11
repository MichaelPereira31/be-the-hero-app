import api from "@/services";

export interface ILoginPayload {
  email: string;
  password: string;
}

const login = (payload: ILoginPayload) => {
  return api.post<string>("/user/authenticate", payload);
};

export default login;
