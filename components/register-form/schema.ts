import messages from "@/utils/yup/messages";
import * as yup from "yup";

export const RegisterSchema = yup.object({
  email: yup
    .string()
    .required(messages.required("Email"))
    .email(messages.email("Email")),
  password: yup
    .string()
    .required(messages.required("Senha"))
    .min(8, messages.min("Senha", 8)),
  name: yup.string().required(messages.required("Nome")),
  lastName: yup.string().required(messages.required("Sobrenome")),
});
