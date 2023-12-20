import { ICreateEventPayload } from "@/services/events/createEvent";
import { IEvent } from "@/services/events/getEvents";

interface IFormField {
  name: keyof ICreateEventPayload;
  placeholder: string;
  label: string;
  type?: string;
}

export const getDefaultValue = (): ICreateEventPayload => ({
  avatar: "",
  name: "",
  description: "",
  subject: "",
  category: "vacancy",
  cost: "10.50",
});

export const getFields = (): IFormField[] => {
  return [
    {
      name: "name",
      placeholder: "Voluntário dia das crianças",
      label: "Título: ",
    },
    {
      name: "description",
      placeholder:
        "Precisamos de 10 jovens que se voluntariem a fazer uma tarde descontraida com as crianças do bairro seminário",
      label: "Descrição: ",
      type: "textarea",
    },
    {
      name: "subject",
      placeholder: "Huge-me",
      label: "Subtítulo: ",
    },
    {
      name: "avatar",
      placeholder: "http://goolge.fotos.com/foto-1",
      label: "Link da Imagem: ",
    },
  ];
};
