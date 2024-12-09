import { useContext, useState } from "react";
import TokenIcon from "@mui/icons-material/Token";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { Link, NavLink } from "react-router-dom";
import { DarkModeContext } from "../../context/DarkModeContext";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggle = () => {
    setToggleMenu((prevToggle) => !prevToggle);
  };

  return (
    <nav
      className={`flex flex-row items-center w-full justify-between px-4 py-4 md:px-6 md:py-4 fixed z-50 ${
        darkMode ? "bg-dark-background" : "bg-background"
      }`}
    >
      <Link
        to="/"
        className={`Logo text-dark-primary w-fit ${
          darkMode ? "text-dark-primary" : "text-primary"
        } flex flex-row items-center gap-1 cursor-pointer`}
      >
        <TokenIcon style={{ fontSize: 35 }} />
        <p className="text-lg md:text-2xl font-bold font-rubik">
          Ahmed{" "}
          <span
            className={`${darkMode ? "text-dark-secondary" : "text-secondary"}`}
          >
            Arhab
          </span>
        </p>
      </Link>
      <div className="flex flex-row-reverse md:flex-row gap-3  md:gap-32">
        <div
          className={`links-lg-screen hidden ${
            darkMode ? "text-dark-primary" : "text-secondary"
          } md:flex items-center justify-between gap-16`}
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex justify-center items-center px-4 py-2 border rounded-full transition-all duration-150 ease-linear ${
                isActive
                  ? darkMode
                    ? "border-dark-secondary"
                    : "border-secondary"
                  : darkMode
                  ? "border-dark-primary hover:border-dark-secondary"
                  : "border-primary hover:border-secondary"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/project"
            className={({ isActive }) =>
              `flex justify-center items-center px-4 py-2 border rounded-full transition-all duration-150 ease-linear ${
                isActive
                  ? darkMode
                    ? "border-dark-secondary"
                    : "border-secondary"
                  : darkMode
                  ? "border-dark-primary hover:border-dark-secondary"
                  : "border-primary hover:border-secondary"
              }`
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/Resume"
            className={({ isActive }) =>
              `flex justify-center items-center px-4 py-2 border rounded-full transition-all duration-150 ease-linear ${
                isActive
                  ? darkMode
                    ? "border-dark-secondary"
                    : "border-secondary"
                  : darkMode
                  ? "border-dark-primary hover:border-dark-secondary"
                  : "border-primary hover:border-secondary"
              }`
            }
          >
            Resume
          </NavLink>
          <NavLink
            to="/Contact"
            className={({ isActive }) =>
              `flex justify-center items-center px-4 py-2 border rounded-full transition-all duration-150 ease-linear ${
                isActive
                  ? darkMode
                    ? "border-dark-secondary"
                    : "border-secondary"
                  : darkMode
                  ? "border-dark-primary hover:border-dark-secondary"
                  : "border-primary hover:border-secondary"
              }`
            }
          >
            Contact
          </NavLink>
        </div>
        {toggleMenu && (
          <div
            className={`links-menu md:hidden absolute top-16 right-8 flex flex-col w-56 p-5 items-center justify-center gap-3 rounded-2xl ${
              darkMode ? "bg-[#1E1C21]" : "bg-[#e5e0e7]"
            }`}
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                `py-2 px-5 hover:border-dark-secondary hover:border-b ${
                  isActive
                    ? darkMode
                      ? "border-dark-secondary border rounded-full"
                      : "border-secondary border rounded-full"
                    : ""
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/project"
              className={({ isActive }) =>
                `py-2 px-5 ${
                  isActive
                    ? darkMode
                      ? "border-dark-secondary border rounded-full"
                      : "border-secondary border rounded-full"
                    : ""
                }`
              }
            >
              Projects
            </NavLink>

            <NavLink
              to="/resume"
              className={({ isActive }) =>
                `py-2 px-5 ${
                  isActive
                    ? darkMode
                      ? "border-dark-secondary border rounded-full"
                      : "border-secondary border rounded-full"
                    : ""
                }`
              }
            >
              Resume
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `py-2 px-5 ${
                  isActive
                    ? darkMode
                      ? "border-dark-secondary border rounded-full"
                      : "border-secondary border rounded-full"
                    : ""
                }`
              }
            >
              Contact
            </NavLink>
          </div>
        )}

        <div className="md:hidden menu-icon cursor-pointer">
          <IoMenu
            onClick={handleToggle}
            className={`text-[30px] ${
              darkMode ? "text-dark-primary" : "text-primary"
            }`}
          />
        </div>
        <div
          className="light-mode-icon cursor-pointer"
          onClick={toggleDarkMode}
        >
          {darkMode ? (
            <LightModeIcon
              style={{ fontSize: 30, color: "#E6E0E9" }}
              aria-label="Toggle light mode"
            />
          ) : (
            <DarkModeIcon
              style={{ fontSize: 30, color: "#000" }}
              aria-label="Toggle dark mode"
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
