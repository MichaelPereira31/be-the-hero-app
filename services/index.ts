import axios, { Axios } from "axios";

const api = new Axios({
  baseURL: "http://localhost:3333",
});

export const setToken = (_token: string) => {
  api.defaults.headers.common["Authorization"] = `Bearer ${_token}`;
};

export const removeToken = () => {
  api.defaults.headers.common["Authorization"] = "";
};

export default api;
