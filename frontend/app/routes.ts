import {
  type RouteConfig,
  route,
  index,
  layout,
} from "@react-router/dev/routes";

export default [
  layout("./routes/mainLayout.tsx", [
    index("routes/home.tsx"),
    route("about", "routes/about.tsx"),
    route("contact", "routes/contact.tsx")
  ]),
  route("login", "./pages/Auth/Login.tsx"),
  route("register", "./pages/Auth/Register.tsx"),
] satisfies RouteConfig;
