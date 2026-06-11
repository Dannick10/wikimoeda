import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "/logo.png";
import { MenuMobile } from "../MenuMobile";

type NavLinkProps = {
  label: string;
  to: string;
};

const Header = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleMenu = () => {
    setOpen(!open);
  };

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium tracking-wide transition-colors duration-200 cursor-pointer ${
      isActive
        ? "text-lime-400 font-semibold"
        : "text-gray-400 hover:text-white"
    }`;

  const mobileNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `w-full text-center py-6 text-base border-b border-gray-900 transition-colors ${
      isActive
        ? "text-lime-400 font-bold bg-lime-500/5"
        : "text-gray-300 hover:text-white hover:bg-gray-900/30"
    }`;

  const handleClickMenu = () => {
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const NavItems: NavLinkProps[] = [
    { label: "Início", to: "/" },
    { label: "Conversor", to: "/conversor" },
    { label: "Wiki", to: "/Wiki" },
    { label: "Notícias", to: "/noticias" },
  ];

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-gray-950 backdrop-blur-md border-b border-gray-900 px-6 py-4 md:px-10 flex items-center justify-between transition-all duration-300">
      <Link
        to="/"
        className="flex items-center gap-2.5 active:scale-98 transition-transform"
      >
        <img
          src={logo}
          alt="Wikimoeda Logo"
          className="w-7 h-7 object-contain"
        />
        <h2 className="text-xl font-bold tracking-wider font-Rubik text-white">
          WIKI<span className="text-lime-400">MOEDA</span>
        </h2>
      </Link>

      <nav className="hidden md:block">
        <ul className="flex items-center gap-8">
          {NavItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={navLinkClass}
                onClick={handleClickMenu}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <button
        type="button"
        className="w-10 h-10 flex flex-col justify-center items-center gap-1.5 border border-gray-800 rounded-xl bg-gray-900/30 md:hidden focus:outline-none transition-all duration-200 active:scale-90"
        onClick={handleMenu}
        aria-label="Toggle Menu"
      >
        <span
          className={`h-0.5 w-5 bg-lime-400 rounded-full transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`}
        />
        <span
          className={`h-0.5 w-5 bg-lime-400 rounded-full transition-all duration-200 ${open ? "opacity-0" : ""}`}
        />
        <span
          className={`h-0.5 w-5 bg-lime-400 rounded-full transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`}
        />
      </button>

      {open && (
        <MenuMobile
          NavItems={NavItems}
          handleClickMenu={handleClickMenu}
          handleMenu={handleMenu}
          mobileNavLinkClass={mobileNavLinkClass}
        />
      )}
    </header>
  );
};

export default Header;
