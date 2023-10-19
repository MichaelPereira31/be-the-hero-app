import messages from "@/utils/yup/messages";
import * as yup from "yup";

export const LoginSchema = yup.object({
  email: yup
    .string()
    .required(messages.required("Email"))
    .email(messages.email("Email")),
  password: yup.string().required(messages.required("Senha")),
});
