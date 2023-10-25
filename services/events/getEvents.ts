import api from "@/services";

export interface IEvent {
  id: string;
  avatar: string;
  category: string;
  name: string;
  subject: string;
  description: string;
  cost: string;
}

export interface IListEvent {
  data: IEvent[];
}

const getEvents = async () => {
  return await api.get<IListEvent>("/event");
};

export default getEvents;
