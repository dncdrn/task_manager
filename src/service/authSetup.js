import axios from "axios";
import { domainURL } from "./domainURL";

const authAxios = axios.create();

authAxios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("user_token");
    if (token) {
      config.baseURL = domainURL;
      config.headers.authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default authAxios;
