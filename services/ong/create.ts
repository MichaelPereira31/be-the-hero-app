import { getToken } from "@/hooks/useAuthentication/helper";
import api from "@/services";
import { IHeaders } from "../@types/request";

export interface ICreateOngPayload {
  name: string;
  description: string;
  objective: string;
  mainPhone: string;
  secondaryPhone: string;
  mainEmail: string;
  secondaryEmail: string;
}

const createOng = async (payload: ICreateOngPayload, headers?: IHeaders) => {
  return await api.post("/ong/", payload, {
    headers,
  });
};

export default createOng;
