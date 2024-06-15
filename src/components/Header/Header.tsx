import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "/logo.png";

const Header = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleMenu = () => {
    setOpen(open ? false : true);
  };

  console.log(open);

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
            to={"/cotacao"}
            className="cursor-pointer px-2 flex hover:text-lime-400 w-30"
          >
            <p>Cotação</p>
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
                to={"/cotacao"}
                className="cursor-pointer px-2 hover:text-lime-400 border-b-2 border-lime-400 w-full flex justify-center p-10"
              >
                Cotação
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
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
