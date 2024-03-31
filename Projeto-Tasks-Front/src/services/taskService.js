import axios from 'axios';

const API_URL = 'http://localhost:8000/api/';

// export const fetchWithToken = async (url, navigate = null) => {
//   console.log("Realizando requisição para:", url);
//   const token = localStorage.getItem('token');

//   if (!token) {
//     console.log("Token não encontrado. Redirecionando para login...");
//     navigate ? navigate('/login') : window.location.href = '/login';
//     return;
//   }
  
//   try {
//     response = await axios.get(url, {
//       headers: { Authorization: `Bearer ${token}` },
//     });
//     console.log(response);
//     return response;
//   } catch (error) {
//     console.error('Erro ao fazer requisição:', error.response);
    
//     if (error.response && error.response.status === 401) {
//       localStorage.removeItem('token');
//       navigate ? navigate('/login') : window.location.href = '/login';
//       throw error;
//     }
//   }
// };


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
