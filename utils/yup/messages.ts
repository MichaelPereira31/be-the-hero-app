const required = (name: string) => `"${name}" é obrigatório.`;
const email = (name: string) => `${name} deve ser um e-mail válido.`;
const min = (name: string, min: number) =>
  `${name} deve ter pelo menos ${min} caracteres.`;
const addressNumber = (name: string) =>
  `${name} deve seguir um desses modelos: 200, 200A`;
const phoneNumber = (name: string) =>
  `${name} deve ser um número de telefone válido.`;

const messages = {
  required,
  email,
  phoneNumber,
  addressNumber,
  min,
};

export default messages;
