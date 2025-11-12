import API from "./api";

export const getPasswords = async () => (await API.get("/api/passwords")).data;
export const addPassword = async (data) => (await API.post("/api/passwords", data)).data;
export const updatePassword = async (id, data) => (await API.put(`/api/passwords/${id}`, data)).data;
export const deletePassword = async (id) => (await API.delete(`/api/passwords/${id}`)).data;
