import { IUserType } from "@/services/auth/create";
import { ICompleteRegistrationField, ICompleteRegistrationForm } from ".";

interface IFormField {
  name: ICompleteRegistrationField;
  placeholder: string;
  label: string;
}

export const getDefaultValue = (): ICompleteRegistrationForm => {
  return {
    description: "",
    objective: "",
    mainPhone: "",
    secondaryPhone: "",
    mainEmail: "",
    secondaryEmail: "",
    street: "",
    number: "",
    neighborhood: "",
    city: "",
    complement: "",
    reference: "",
    type: "ong",
    userId: "",
  };
};

export const getUserFieldsList = (): IFormField[] => {
  return [
    { name: "street", placeholder: "Rua", label: "Rua:" },
    { name: "number", placeholder: "420", label: "Número:" },
    { name: "neighborhood", placeholder: "seminário", label: "Bairro:" },
    { name: "city", placeholder: "Crato", label: "Cidade: " },
    {
      name: "complement",
      placeholder: "Casa A / Andar 3 - Apartamento 3",
      label: "Complemento",
    },
    {
      name: "reference",
      placeholder: "Próximo ao colégio agrícola",
      label: "Referência",
    },
  ];
};

export const getOngFieldsList = (): IFormField[] => {
  return [
    { name: "description", placeholder: "Ajudamos cães", label: "Descrição: " },
    {
      name: "objective",
      placeholder: "ajudar cães de rua",
      label: "Objetivo:",
    },
    {
      name: "mainPhone",
      placeholder: "(00) 0 0000-0000",
      label: "Telefone Principal: ",
    },
    {
      name: "secondaryPhone",
      placeholder: "(00) 0 0000-0000",
      label: "Telefone Secundário: ",
    },
    {
      name: "mainEmail",
      placeholder: "ong@hero.com",
      label: "Email Principal: ",
    },
    {
      name: "secondaryEmail",
      placeholder: "ong2@hero.com",
      label: "Email Secundário: ",
    },
  ];
};
