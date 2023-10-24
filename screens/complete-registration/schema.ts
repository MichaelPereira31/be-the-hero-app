import messages from "@/utils/yup/messages";
import { regexValidations } from "@/utils/yup/validations";
import * as yup from "yup";

const AddressObjectSchema = {
  street: yup.string().required(messages.required("Rua")),
  number: yup
    .string()
    .required(messages.required("Número"))
    .matches(regexValidations.houseNumber, messages.addressNumber("Número")),
  neighborhood: yup.string().required(messages.required("Bairro")),
  city: yup.string().required(messages.required("Cidade")),
  complement: yup.string(),
  state: yup.string().required(messages.required("Estado")),
  reference: yup.string().required(messages.required("Referência")),
};

const OngObjectSchema = {
  name: yup.string().required(messages.required("Nome")),
  mainPhone: yup
    .string()
    .required(messages.required("Telefone Principal"))
    .matches(
      regexValidations.phoneNumberRegex,
      messages.phoneNumber("Telefone Principal")
    ),
  secondaryPhone: yup
    .string()
    .matches(
      regexValidations.phoneNumberRegex,
      messages.phoneNumber("Telefone Secundário")
    ),
  mainEmail: yup
    .string()
    .required(messages.required("Email Principal"))
    .email(messages.email("Email Principal")),
  secondaryEmail: yup.string().email(messages.email("Email Secundário")),
  description: yup.string().required(messages.required("Descrição")),
  objective: yup.string().required(messages.required("Objetivo")),
};

export const OngSchema = yup.object({
  ...AddressObjectSchema,
  ...OngObjectSchema,
});

export const AddressSchema = yup.object(AddressObjectSchema);
