import axios from "axios";

const url = import.meta.env.VITE_BASE_URL;

const axiosPublic = axios.create({
  baseURL: url,
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
