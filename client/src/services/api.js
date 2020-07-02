import axios from 'axios';

import { getToken, logout } from './auth';

const api = axios.create({
  baseURL: 'http://localhost:3001/api/v1'
});

api.interceptors.request.use((config) => {
  const token = getToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (
      (error.response !== undefined && error.response.status === 401)
      || (error.response !== undefined && error.response.status === 404)
    ) {
      logout();
    } else {
      return Promise.reject(error);
    }
  }
);

export default api;
