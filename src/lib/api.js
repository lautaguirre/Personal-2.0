import axios from "axios";

const URL = process.env.REACT_APP_API_URL;

const api = axios.create({
  baseURL: URL,
  timeout: 20000,
});

// SET THE TOKEN EN EVERY REQUEST
api.interceptors.request.use(config => {
  const token = localStorage.getItem('token') || sessionStorage.getItem('token');
  config.headers.Authorization = token ? `Bearer ${token}` : '';

  return config;
});

export default api;
