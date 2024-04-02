import axios from 'axios';

const API_URL = 'https://backend.pppix.app.br/api/';

export const login = async (credentials) => {
  return axios.post(API_URL + 'loginAPI', credentials);
};

export const register = async (userData) => {
  return axios.post(API_URL + 'registerAPI', userData);
};

export const getAllTasks = async () => {
  const token = localStorage.getItem('token');
  return axios.get(API_URL + 'tasks/all', {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const getTasks = async (id) => {
  const token = localStorage.getItem('token');
  return axios.get(API_URL + `tasks/get/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const createTasks = async (taskData) => {
  const token = localStorage.getItem('token');
  return axios.post(API_URL + 'tasks/add', taskData, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const deleteTasks = async (id) => {
  const token = localStorage.getItem('token');
  return axios.delete(API_URL + `tasks/delete/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const updateTasks = async (id, taskData) => {
  const token = localStorage.getItem('token');
  return axios.put(API_URL + `tasks/update/${id}`, taskData, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
