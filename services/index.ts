import axios from "axios";

const api = axios.create({
  baseURL: "https://space-guest-cassette-reef.trycloudflare.com",
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
  },
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
