import logo from "/logo.png";

const Footer = () => {
  return (
    <footer className="w-full max-w-6xl mx-auto px-6 py-8 border-t border-gray-900 mt-auto flex flex-col items-center justify-between gap-6 md:flex-row bg-transparent">
      
      <div className="flex items-center gap-2.5">
        <img src={logo} alt="Wikimoeda Logo" className="w-6 h-6 object-contain" />
        <h3 className="text-base font-bold tracking-wider font-Rubik text-white uppercase">
          Wiki<span className="text-lime-400">moeda</span>
        </h3>
      </div>

      <div className="text-xs font-normal text-gray-500 order-3 md:order-2 text-center md:text-left">
        <p>&copy; {new Date().getFullYear()} Wikimoeda&trade;. Todos os direitos reservados.</p>
      </div>

      <div className="flex items-center gap-3 order-2 md:order-3">
        <a 
          href="https://github.com/Dannick10" 
          target="_blank" 
          rel="noreferrer"
          className="block"
        >
          <button
            type="button"
            className="text-gray-400 bg-gray-900/40 hover:bg-gray-900 hover:text-white border border-gray-800/80 font-medium rounded-xl text-xs px-4 py-2.5 flex items-center gap-2 transition-all duration-200 active:scale-95 shadow-inner"
          >
            <i className="fa-brands fa-github-alt text-sm text-lime-400" />
            Github
          </button>
        </a>
        
        <a 
          href="https://www.linkedin.com/in/futurodevdaniel/" 
          target="_blank" 
          rel="noreferrer"
          className="block"
        >
          <button
            type="button"
            className="text-gray-400 bg-gray-900/40 hover:bg-gray-900 hover:text-white border border-gray-800/80 font-medium rounded-xl text-xs px-4 py-2.5 flex items-center gap-2 transition-all duration-200 active:scale-95 shadow-inner"
          >
            <i className="fa-brands fa-linkedin text-sm text-lime-400" />
            LinkedIn
          </button>
        </a>
      </div>

    </footer>
  );
};

export default Footer;