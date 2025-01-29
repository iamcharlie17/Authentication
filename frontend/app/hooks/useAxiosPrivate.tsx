import axios from "axios";

const url = import.meta.env.VITE_SERVER_URL;

export const axiosPrivate = axios.create({
  baseURL: url,
});

axiosPrivate.interceptors.request.use(
  (config) => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = token;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

