import axios from "axios";

const URL = 'http://127.0.0.1:3002/';

const api = axios.create({
  baseURL: URL,
  timeout: 20000,
});

api.interceptors.request.use(config => {
  const token = localStorage.getItem('token') || sessionStorage.getItem('token');
  config.headers.Authorization = token ? `Bearer ${token}` : '';

  return config;
});

export default api;
