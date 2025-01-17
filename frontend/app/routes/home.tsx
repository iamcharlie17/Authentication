import Homepage from "~/pages/HomePage/Homepage";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Authentcation" },
  ];
}

export default function Home() {
  return <Homepage/>;
}
