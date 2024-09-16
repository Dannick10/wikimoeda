import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "/logo.png";

const Header = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleMenu = () => {
    setOpen(open ? false : true);
  };


  return (
    <header className="flex items-center justify-evenly p-4 fixed z-10 w-full bg-[#0D0D0D] top-0 border-b-2 border-b-lime-400 links md:justify-between md:px-10">
      <Link to={"/"}>
        <div className="flex items-center gap-2">
          <img src={logo} alt="" className="w-8" />
          <h2 className="text-2xl font-medium tracking-wider font-Rubik">
            WIKI<span className="text-lime-400">MOEDA</span>
          </h2>
        </div>
      </Link>

      <nav className="hidden md:block">
        <ul className="grid grid-flow-col gap-x-2">
          <NavLink
            to={"/"}
            className="cursor-pointer px-2 flex hover:text-lime-400 w-30"
          >
            <p>Inicio</p>
          </NavLink>
          <NavLink
            to={"/conversor"}
            className="cursor-pointer px-2 flex hover:text-lime-400 w-30"
          >
            <p>Conversor</p>
          </NavLink>

          <NavLink
            to={"/Wiki"}
            className="cursor-pointer px-2  hover:text-lime-400 w-30"
          >
            WIKI
          </NavLink>
          <NavLink
            to={"/noticias"}
            className="cursor-pointer px-2  hover:text-lime-400 w-30 text-center"
          >
            Noticias
          </NavLink>
        </ul>
      </nav>

      <div
        className={`cursor-pointer right-10 border-lime-400 border-2 w-10 h-10 rounded-md flex flex-col justify-around items-center md:hidden ${
          open && "open"
        }`}
        onClick={handleMenu}
      >
        <span className="border-b border-2 w-[2em] border-lime-400"></span>
        <span className="border-b border-2 w-[2em] border-lime-400"></span>
        <span className="border-b border-2 w-[2em] border-lime-400"></span>
      </div>

      {open && (
        <>
          <div
            id="menu"
            className="w-screen h-screen bg-neutral-950 absolute right-0 top-[4.6em] select-none"
            onClick={handleMenu}
          >
            <ul className="flex flex-col justify-center items-center">
              <NavLink
                to={"/"}
                className="cursor-pointer px-2 hover:text-lime-400 w-30 border-b-2 border-lime-400  w-full flex justify-center p-10"
              >
                Inicio
              </NavLink>
              <NavLink
                to={"/conversor"}
                className="cursor-pointer px-2 hover:text-lime-400 w-30 border-b-2 border-lime-400  w-full flex justify-center p-10"
              >
                Conversor
              </NavLink>

              
              <NavLink
                to={"/Wiki"}
                className="cursor-pointer px-2  hover:text-lime-400 border-b-2 border-lime-400 w-full flex justify-center p-10"
              >
                WIKI
              </NavLink>
              <NavLink
                to={"/noticias"}
                className="cursor-pointer px-2  hover:text-lime-400  border-b-2 border-lime-400 w-full flex justify-center p-10"
              >
                Noticias
              </NavLink>
            </ul>
            <div className="flex flex-col items-center gap-2 my-8">
              <h2 className="text-sm text-gray-400">Me siga para mais</h2>
              <a href="https://github.com/Dannick10" target="_blank">
                <button
                  type="button"
                  className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2 gap-2"
                >
                  <i className="fa-brands fa-github-alt"></i>
                  Github
                </button>
              </a>

              <a
                href="https://www.linkedin.com/in/futurodevdaniel/"
                target="_blank"
              >
                <button
                  type="button"
                  className="text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 me-2 mb-2 gap-2"
                >
                  <i className="fa-brands fa-linkedin"></i>
                  Linkedin
                </button>
              </a>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
