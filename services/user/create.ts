import api from "@/services";

export type IUserType = "ong" | "voluntary" | undefined;

export interface ICreateUserPayload {
  name: string;
  lastName: string;
  email: string;
  password: string;
  type?: IUserType;
}

const createUser = async (payload: ICreateUserPayload) => {
  return await api.post("/user/", payload);
};

export default createUser;
