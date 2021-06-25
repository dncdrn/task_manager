import axios from "axios";
import { domainURL } from "./domainURL";

export function loginAccount(data) {
  axios.post(`${domainURL}/login`, data).then((res) => {
    localStorage.setItem("userToken", res.data.token.token);
    return res.data;
  });
}
