import axios from "axios";

const url = import.meta.env.BASE_URL;

const axiosPrivate = axios.create({
  baseURL: url,
});

const useAxiosPrivate = async(url: string) => {
  try {
    const token = localStorage.getItem('token');
    const config = {
        url,
        headers:{
            Authorizatio: token ? token : ""
        }
    }

    return axiosPrivate(config);
  } catch (error) {
    console.error("API call failed:", error);
    throw error;
  }
};

export default useAxiosPrivate;
