import type { JSX } from "react";
import { Navigate } from "react-router";
import useAuth from "~/hooks/useAuth";

const AuthRoute = ({ children }: { children: JSX.Element }) => {
  const { user } = useAuth();

  if (!user) return <Navigate to={"/"} replace />;

  if (user) return children;
};

export default AuthRoute;
