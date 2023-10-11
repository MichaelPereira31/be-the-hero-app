import api from "@/services";

export interface ILoginPayload {
  email: string;
  password: string;
}

const login = async (payload: ILoginPayload) => {
  return await api.post<string>("/user/authenticate", payload);
};

export default login;
