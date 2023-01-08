import axios from "axios";

const URL = process.env.NEXT_PUBLIC_API_URL;

const api = axios.create({
  baseURL: URL,
  timeout: 20000,
  withCredentials: true,
});

// Set the auth token on every request
api.interceptors.request.use((config) => {
  // const token =
  //   localStorage.getItem("token") || sessionStorage.getItem("token");

  // if (config.headers) {
  //   config.headers.Authorization = token ? `Bearer ${token}` : "";
  // }

  return config;
});

export default api;
