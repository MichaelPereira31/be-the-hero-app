import api from "@/services";

export type IUserType = "ong" | "voluntary" | undefined;

export interface ICreateUserPayload {
  name: string;
  sobrenome: string;
  email: string;
  password: string;
  type?: IUserType;
}

const createUser = async (payload: ICreateUserPayload) => {
  return await api.post("/auth/create", payload);
};

export default createUser;
