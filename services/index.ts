import { Axios } from "axios";

const api = new Axios({
  baseURL: "https://linear-inbox-compatible-tune.trycloudflare.com/",
});

export const setToken = (_token: string) => {
  if (api?.defaults?.headers?.common)
    api.defaults.headers.common["Authorization"] = `Bearer ${_token}`;
};

export const removeToken = () => {
  if (api.defaults.headers.common)
    api.defaults.headers.common["Authorization"] = "";
};

export default api;
