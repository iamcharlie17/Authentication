import { Link, NavLink } from "react-router";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { url: "/", title: "Home" },
    { url: "/about", title: "About" },
    { url: "/contact", title: "Contact" },
  ];

  const handleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      <nav className="flex justify-between items-center bg-white text-black p-4 md:p-6 shadow-lg">
        <div className="block md:hidden">
          <button onClick={handleMenu}>
            <IoMenu size={25} />
          </button>
        </div>

        <div>
          <Link to="/">
            <h1 className="font-bold text-lg md:text-xl">AUTHENTICATION</h1>
          </Link>
        </div>

        <div className="hidden md:flex gap-8">
          {navLinks.map((link, idx) => (
            <div key={idx}>
              <NavLink
                to={link?.url}
                className={({ isActive }) =>
                  isActive ? "font-bold underline" : "hover:font-bold"
                }
              >
                {link?.title}
              </NavLink>
            </div>
          ))}
        </div>

        <div>
          <Link to="/login">
            <button className="bg-black text-white px-3 md:px-4 py-1 md:py-2 rounded-md uppercase font-semibold md:font-bold hover:bg-gray-800 transition duration-300">
              Login
            </button>
          </Link>
        </div>
      </nav>

      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } md:hidden flex-col justify-center items-center absolute gap-4 left-0 w-full bg-white z-10 shadow-lg p-8`}
      >
        {navLinks.map((link, idx) => (
          <div key={idx}>
            <NavLink
              onClick={() => setIsOpen(false)}
              to={link?.url}
              className={({ isActive }) =>
                isActive ? "font-bold underline" : "hover:font-bold"
              }
            >
              {link?.title}
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
