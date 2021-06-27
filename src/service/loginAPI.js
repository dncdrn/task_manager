import axios from "axios";
import { domainURL } from "./domainURL";

export function loginAccount(data) {
  return axios.post(`${domainURL}/login`, data).then((res) => res.data);
}
