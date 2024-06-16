import React from "react";
import logo from "/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="p-5 border-t-2 border-lime-400 flex flex-col justify-around items-center gap-5 md:flex-row">
      <div className="flex items-center justify-center gap-2">
        <img src={logo} alt="logo do wikimoeda" className="w-7" />
        <h3 className="text-lg font-medium tracking-wider font-Rubik">
          Wiki<span className="text-lime-400">moeda</span>
        </h3>
      </div>

      <div className="text-sm text-gray-400">
        <p>© 2023 Wikimoeda&trade; todos direitos reservados.</p>
      </div>

      <div className="flex flex-col items-center gap-1 text-sm text-gray-400">
          <p>Me siga para mais 
          </p>

        <Link to="https://github.com/Dannick10" target="_blank">
            <button
              type="button"
              className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2 gap-2"
            >
                <i className="fa-brands fa-github-alt"></i>
              Github
            </button>
        </Link>
<Link to="https://www.linkedin.com/in/futurodevdaniel/" target="_blank">
    
            <button
              type="button"
              className="text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 me-2 mb-2 gap-2"
            >
             <i className="fa-brands fa-linkedin"></i>
             Linkedin
            </button>
</Link>

      </div>
    </footer>
  );
};

export default Footer;
