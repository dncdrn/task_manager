import authAxios from "./authSetup";

export function getDashboardData() {
  return authAxios.get(`/dashboard`).then((res) => res.data);
}
