import api from '..'
interface User {
    name: string;
    email: string;
    password: string;
}
const create = async (user: User) => {
  return await api.post('/auth/create',  user )
}

export default create
