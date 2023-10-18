import { TUseAuthentication } from "@/hooks/useAuthentication";
import { getToken } from "@/hooks/useAuthentication/helper";
import api from "@/services";
import { IHeaders } from "../@types/request";

export interface ICreateAddressPayload {
  street: string;
  number: string;
  neighborhood: string;
  city: string;
  complement: string;
  reference: string;
}

const createAddress = async (
  payload: ICreateAddressPayload,
  headers?: IHeaders
) => {
  return await api.post("/address/", payload, {
    headers,
  });
};

export default createAddress;
