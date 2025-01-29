import axios from "axios";

const url = import.meta.env.VITE_SERVER_URL;

export const axiosPublic = axios.create({
  baseURL: url,
});


