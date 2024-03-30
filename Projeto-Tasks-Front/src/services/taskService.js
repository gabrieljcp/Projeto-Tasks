import axios from 'axios';
import { useNavigate  } from 'react-router-dom';

const API_URL = 'http://localhost:8000/api/'; 

const fetchWithToken = async (url, options = {}) => {
  const token = localStorage.getItem('token');
  const headers = new Headers(options.headers || {});
  const navigate = useNavigate();
  headers.append('Authorization', `Bearer ${token}`);

  const response = await fetch(url, { ...options, headers });

  if (response.status === 401) {
    localStorage.removeItem('token');
    navigate('/login'); 
  }

  return response;
};



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
