import axios from 'axios';

const API_URL = 'http://localhost:8000/api/'; // Ajuste conforme necessário

export const login = async (credentials) => {
  return axios.post(API_URL + 'loginAPI', credentials);
};

export const register = async (userData) => {
  return axios.post(API_URL + 'registerAPI', userData);
};

export const getAllTasks = async () => {
  return axios.get(API_URL + 'tasks/all');
};

export const getTasks = async (id) => {
  return axios.get(API_URL + `tasks/get/${id}`);
};

export const createTasks = async (taskData) => {
  return axios.post(API_URL + 'tasks/add', taskData);
};

export const deleteTasks = async (id) => {
  return axios.delete(API_URL + `tasks/delete/${id}`);
};

export const updateTasks = async (id, taskData) => {
  return axios.put(API_URL + `tasks/update/${id}`, taskData);
};
