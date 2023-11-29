import api from "@/services";
import { IEvent } from "./getEvents";
export interface IEventData {
  data: IEvent;
}

const getEventById = async (eventID: string) => {
  return await api.get<IEventData>(`/event/${eventID}`);
};

export default getEventById;
