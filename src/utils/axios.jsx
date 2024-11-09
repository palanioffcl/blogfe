import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_API_URL;
export const appUrl = import.meta.env.VITE_API_URL;

export const axiosPost = (url, payload) => axios.post("/" + url, payload);
export const axiosGet = (url, payload, config) => axios.get("/" + url, payload, config);
export const axiosPut = (url, payload) => axios.put("/" + url, payload);
export const axiosPatch = (url, payload) => axios.put("/" + url, payload);
export const axiosDelete = (url, payload) => axios.delete("/" + url, payload);

export const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};