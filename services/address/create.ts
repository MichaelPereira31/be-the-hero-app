import { TUseAuthentication } from "@/hooks/useAuthentication";
import { getToken } from "@/hooks/useAuthentication/helper";
import api from "@/services";

export interface ICreateAddressPayload {
  street: string;
  number: string;
  neighborhood: string;
  city: string;
  complement: string;
  reference: string;
}

const createAddress = async (payload: ICreateAddressPayload) => {
  const tokenConf = await getToken();
  return await api.post("/address/", payload, {
    headers: { Authorization: `Bearer ${tokenConf?.token}` },
  });
};

export default createAddress;
