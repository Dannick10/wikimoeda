import logo from "/logo.png";

const Footer = () => {
  return (
    <footer className="py-6 border-t-2 border-lime-400 flex flex-col justify-around items-center gap-5 md:flex-row">
      <div className="flex items-center justify-center gap-2">
        <img src={logo} alt="logo do wikimoeda" className="w-7" />
        <h3 className="text-lg font-medium tracking-wider font-Rubik">
          Wiki<span className="text-lime-400">moeda</span>
        </h3>
      </div>

      <div className="text-sm text-gray-400">
        <p>© 2023 Wikimoeda&trade; todos direitos reservados.</p>
      </div>

      <div className="flex flex-col items-center gap-1 text-sm text-gray-400 md:flex-row">
        <a href="https://github.com/Dannick10" target="_blank">
          <button
            type="button"
            className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2 gap-2"
          >
            <i className="fa-brands fa-github-alt"></i>
            Github
          </button>
        </a>
        <a href="https://www.linkedin.com/in/futurodevdaniel/" target="_blank">
          <button
            type="button"
            className="text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 me-2 mb-2 gap-2"
          >
            <i className="fa-brands fa-linkedin"></i>
            Linkedin
          </button>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
