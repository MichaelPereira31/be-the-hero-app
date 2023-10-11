import api from "@/services";

export interface ICreateOngPayload {
  userId: string;
  description: string;
  objective: string;
  mainPhone: string;
  secondaryPhone: string;
  mainEmail: string;
  secondaryEmail: string;
}

const createOng = async (payload: ICreateOngPayload) => {
  return await api.post("/ong/create", payload);
};

export default createOng;
