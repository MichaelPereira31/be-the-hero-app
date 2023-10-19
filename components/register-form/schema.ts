import * as yup from "yup";

export const RegisterSchema = yup.object({
  email: yup.string().required().email(),
  password: yup.string().required().min(8),
  name: yup.string().required(),
  lastName: yup.string().required(),
});
