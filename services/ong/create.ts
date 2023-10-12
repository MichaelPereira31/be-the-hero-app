import { getToken } from "@/hooks/useAuthentication/helper";
import api from "@/services";

export interface ICreateOngPayload {
  description: string;
  objective: string;
  mainPhone: string;
  secondaryPhone: string;
  mainEmail: string;
  secondaryEmail: string;
}

const createOng = async (payload: ICreateOngPayload) => {
  const tokenConf = await getToken();

  return await api.post("/ong/", payload, {
    headers: { Authorization: `Bearer ${tokenConf?.token}` },
  });
};

export default createOng;
