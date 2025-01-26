import axios from "axios";

const url = "http://localhost:3200/";

const axiosPrivate = axios.create({
  baseURL: url,
});

const useAxiosPrivate = () => {
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

  return axiosPrivate;
};

export default useAxiosPrivate;
