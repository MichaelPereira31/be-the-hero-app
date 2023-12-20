import api from "@/services";
import { IEvent } from "./getEvents";
import { IHeaders } from "../@types/request";

export type ICreateEventPayload = Omit<IEvent, "id">;

const createEvent = (payload: ICreateEventPayload, headers?: IHeaders) =>
  api.post(`/event`, payload, {
    headers,
  });

export default createEvent;
