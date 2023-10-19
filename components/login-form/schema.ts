import * as yup from "yup";

export const LoginSchema = yup.object({
  email: yup.string().required().email(),
  password: yup.string().required(),
});
