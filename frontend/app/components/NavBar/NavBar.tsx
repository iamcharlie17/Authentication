import { Link, NavLink } from "react-router";

const NavBar = () => {
  const navLinks = [
    {
      url: "/",
      title: "Home",
    },
    {
      url: "/about",
      title: "About",
    },
    {
      url: "/contact",
      title: "Contact",
    },
  ];
  return (
    <nav className="flex justify-between items-center bg-white text-black p-6 shadow-lg">
      <div>
        <h1 className="font-bold text-xl">AUTHENTICATION</h1>
      </div>
      <div className="flex gap-8">
        {navLinks.map((link, idx) => (
          <div key={idx}>
            <NavLink
              to={link?.url}
              className={({ isActive }) =>
                isActive
                  ? "font-bold underline"
                  : "hover:font-bold"
              }
            >
              {link?.title}
            </NavLink>
          </div>
        ))}
      </div>
      <div>
        <Link to={"/login"}>
          <button className="bg-black text-white px-4 py-2 rounded-md uppercase font-bold">
            Login
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
