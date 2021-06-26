import axios from "axios";
import { domainURL } from "./domainURL";
const accessToken = localStorage.getItem("user_token");

export const authAxios = axios.create({
  baseURL: domainURL,
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});
