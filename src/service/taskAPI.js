import authAxios from "./authSetup";

export function getAllTasks() {
  return authAxios.get(`/tasks`).then((res) => res.data);
}
export function addTask(taskData) {
  return authAxios.post(`/tasks`, taskData).then((res) => res.data);
}
export function updateTask(id, taskData) {
  return authAxios.put(`/tasks/${id}`, taskData).then((res) => res.data);
}
export function deleteTask(id) {
  return authAxios.delete(`/tasks/${id}`).then((res) => res.data);
}
