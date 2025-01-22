import AuthRoute from "~/privateRoutes/AuthRoute";
import type { Route } from "../+types/root";

export function meta({}: Route.MetaArgs) {
  return [{ title: "About Us" }];
}
const about = () => {
  return <div className="min-h-[calc(100vh-132px)]">This is about page</div>;
};

export default about;
