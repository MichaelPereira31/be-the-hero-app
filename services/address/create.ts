import api from "@/services";

export interface ICreateAddressPayload {
  userId: string;
  street: string;
  number: string;
  neighborhood: string;
  city: string;
  complement: string;
  reference: string;
}

const createAddress = async (payload: ICreateAddressPayload) => {
  return await api.post("/address/create", payload);
};

export default createAddress;
