import axios from "axios";

const API_URL = "https://testaug.onrender.com/health";

export const getStaff = () => axios.get(`${API_URL}/staff`);

export const createStaff = (data) => axios.post(`${API_URL}/staff`, data);

export const updateStaff = (id, data) =>
  axios.put(`${API_URL}/staff/${id}`, data);

export const deleteStaff = (id) =>
  axios.delete(`${API_URL}/staff/${id}`);
