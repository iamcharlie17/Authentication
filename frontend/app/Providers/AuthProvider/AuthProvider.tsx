import { createContext, useContext, useState, type ReactNode } from "react";

interface User {
  name: string;
}

interface AuthContextType {
  user: User;
}

export const AuthContext = createContext<AuthContextType>({
  user: { name: "Hello" }, 
});

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>({ name: "Charlie" });

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
