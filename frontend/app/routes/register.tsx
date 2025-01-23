import Register from "~/pages/Auth/Register";
import type { Route } from "../+types/root";

export function meta({}: Route.MetaArgs) {
  return [
    {
      title: "Register Page",
    },
  ];
}

const register = () => {
  return <Register />;
};

export default register;
