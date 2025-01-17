import type { Route } from "../+types/root";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Contact Us" }];
}

const contact = () => {
  return <div className="min-h-[calc(100vh-132px)]">This is contact us page</div>;
};

export default contact;
