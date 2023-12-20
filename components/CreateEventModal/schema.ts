import messages from "@/utils/yup/messages";
import * as yup from "yup";

const createEventSchema = yup.object({
  avatar: yup
    .string()
    .required(messages.required("Link"))
    .url(messages.url("Link")),
  name: yup.string().required(messages.required("Título")),
  description: yup.string().required(messages.required("Descrição")),
  subject: yup.string().required(messages.required("Subtítulo")),
});

export default createEventSchema;
