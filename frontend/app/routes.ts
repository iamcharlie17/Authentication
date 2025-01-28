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
    route("contact", "routes/contact.tsx"),
  ]),
  route("login", "./routes/login.tsx"),
  route("register", "./routes/register.tsx"),
  route("google-sign-in-success", "./pages/Auth/GoogleSignInSuccess.tsx"),
] satisfies RouteConfig;
