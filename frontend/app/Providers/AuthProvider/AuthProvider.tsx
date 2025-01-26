import axios from "axios";
import React, {
  createContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import useAxiosPrivate from "~/hooks/useAxiosPrivate";
import useAxiosPublic from "~/hooks/useAxiosPublic";

interface User {
  _id: string;
  fullName: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  login: (email: string, password: string) => Promise<void>;
  register: (
    fullName: string,
    email: string,
    password: string
  ) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  setUser: () => {},
  loading: false,
  setLoading: () => {},
  login: async () => {},
  register: async () => {},
  logout: () => {},
});

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const axiosPrivate = useAxiosPrivate();

  const register = async (
    fullName: string,
    email: string,
    password: string
  ) => {
    try {
      setLoading(true);
      const response = await axiosPublic.post("api/auth/register", {
        fullName,
        email,
        password,
      });
      if (response.data) {
        toast.success(response?.data?.message);
        localStorage.setItem("token", response?.data?.accessToken);
        setUser(response?.data?.user);
        navigate("/");
        setLoading(false);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(
          error?.response?.data?.message ||
            "An error occurred while registering"
        );
      } else {
        toast.error("An unexpected error occurred.");
      }
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      setLoading(true);
      const response = await axiosPublic.post("api/auth/login", {
        email,
        password,
      });
      if (response.data) {
        toast.success(response?.data?.message);
        localStorage.setItem("token", response.data?.accessToken);
        setUser(response.data?.user);
        navigate("/");
        setLoading(false);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(
          error.response?.data?.message || "An error occurred while logging in."
        );
      } else {
        toast.error("An unexpected error occurred.");
      }
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  const getUser = async () => {
    try {
      const response = await axiosPrivate.get("api/auth/user");
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, setUser, loading, setLoading, login, register, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
