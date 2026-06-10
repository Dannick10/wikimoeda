import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "/logo.png";

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

  console.log(innerWidth);
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
          <li>
            <NavLink to="/" className={navLinkClass}>
              Início
            </NavLink>
          </li>
          <li>
            <NavLink to="/conversor" className={navLinkClass}>
              Conversor
            </NavLink>
          </li>
          <li>
            <NavLink to="/Wiki" className={navLinkClass}>
              Wiki
            </NavLink>
          </li>
          <li>
            <NavLink to="/noticias" className={navLinkClass}>
              Notícias
            </NavLink>
          </li>
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
        <div
          id="menu"
          className="fixed inset-0 top-[69px] w-screen h-[calc(100vh-69px)] bg-gray-950/95 backdrop-blur-lg z-40 flex flex-col select-none animate-fadeIn"
          onClick={handleMenu}
        >
          <nav className="w-full flex flex-col">
            <NavLink to="/" className={mobileNavLinkClass}>
              Início
            </NavLink>
            <NavLink to="/conversor" className={mobileNavLinkClass}>
              Conversor
            </NavLink>
            <NavLink to="/Wiki" className={mobileNavLinkClass}>
              Wiki
            </NavLink>
            <NavLink to="/noticias" className={mobileNavLinkClass}>
              Notícias
            </NavLink>
          </nav>

          <div className="mt-auto mb-10 flex flex-col items-center gap-4 px-6 w-full">
            <span className="text-xs font-semibold tracking-wider text-gray-600 uppercase">
              Me siga para mais
            </span>

            <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm justify-center">
              <a
                href="https://github.com/Dannick10"
                target="_blank"
                rel="noreferrer"
                className="flex-1"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  type="button"
                  className="w-full text-gray-300 bg-gray-900 hover:bg-gray-850 hover:text-white border border-gray-800 font-medium rounded-xl text-xs px-4 py-3 flex items-center justify-center gap-2 transition-all duration-200 active:scale-95"
                >
                  <i className="fa-brands fa-github-alt text-sm text-lime-400" />
                  Github
                </button>
              </a>

              <a
                href="https://www.linkedin.com/in/futurodevdaniel/"
                target="_blank"
                rel="noreferrer"
                className="flex-1"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  type="button"
                  className="w-full text-gray-300 bg-gray-900 hover:bg-gray-850 hover:text-white border border-gray-800 font-medium rounded-xl text-xs px-4 py-3 flex items-center justify-center gap-2 transition-all duration-200 active:scale-95"
                >
                  <i className="fa-brands fa-linkedin text-sm text-lime-400" />
                  LinkedIn
                </button>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
