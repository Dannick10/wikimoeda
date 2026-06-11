import { NavLink } from "react-router-dom";

type MenuMobileProps = {
    NavItems: { to: string; label: string }[];
    handleClickMenu: () => void;
    mobileNavLinkClass: ({ isActive }: { isActive: boolean }) => string;
    handleMenu: () => void;
}

export const MenuMobile = ({NavItems, handleClickMenu, mobileNavLinkClass, handleMenu}: MenuMobileProps) => {
    return (
        <div
          id="menu"
          className="fixed inset-0 top-[69px] w-screen h-[calc(100vh-69px)] bg-gray-950/95 backdrop-blur-lg z-40 flex flex-col select-none animate-fadeIn"
          onClick={handleMenu}
        >
          <nav className="w-full flex flex-col" onClick={handleClickMenu}>
            {NavItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={mobileNavLinkClass}
              >
                {item.label}
              </NavLink>
            ))}
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
    )
}