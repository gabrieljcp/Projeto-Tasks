import axios from 'axios';
import {  Navigate, useNavigate   } from 'react-router-dom';

const API_URL = 'http://localhost:8000/api/';

export const fetchWithToken = async (url) => {
  
  const token = localStorage.getItem('token');
  let response;
 console.log("AQUI")
  try {
    response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      
    });
    console.log(response);

  } catch (error) {
    console.error('Erro ao fazer requisição:', error.response);
    
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('token');
      // A maneira de lidar com redirecionamento será discutida abaixo.
      window.location.href = '/login'; // Uma abordagem para redirecionamento.
    }
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
  return fetchWithToken(API_URL + 'tasks/all');
};

export const getTasks = async (id) => {
  return fetchWithToken(API_URL + `tasks/get/${id}`);
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
