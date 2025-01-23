import Login from "~/pages/Auth/Login";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Login Page" }];
}

const login = () => {
  return <Login />;
};

export default login;
