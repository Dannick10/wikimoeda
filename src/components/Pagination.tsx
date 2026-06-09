import React from "react";

type Props = {
  page: number;
  endMaxPage: number;
  changePage: (e: React.MouseEvent<HTMLButtonElement>) => void;
  NextandPreviusPage: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Pagination = ({
  page,
  changePage,
  endMaxPage,
  NextandPreviusPage,
}: Props) => {

  const startPage = Math.max(page - 2, 1);
  const endPage = Math.min(page + 2, endMaxPage);

  const generatePage = () => {
    const list = [];

    for (let i = startPage; i <= endPage; i++) {
      list.push(
        <button
          key={`page-${i}`}
          className={`h-9 w-9 text-xs font-semibold flex items-center justify-center rounded-xl border transition-all duration-200 active:scale-95 ${
            Number(page) === i
              ? "bg-lime-500 text-gray-950 border-lime-500 shadow-md font-bold"
              : "bg-gray-900/40 text-gray-400 border-gray-800/80 hover:border-lime-500/30 hover:text-white backdrop-blur-md"
          }`}
          onClick={changePage}
        >
          {i}
        </button>
      );
    }
    return list;
  };

  return (
    <div className="flex justify-center items-center gap-2 pt-8 w-full">

      <button
        className="h-9 px-4 text-xs font-semibold bg-gray-900/40 text-gray-400 border border-gray-800/80 rounded-xl hover:border-lime-500/30 hover:text-white transition-all duration-200 backdrop-blur-md disabled:opacity-20 disabled:pointer-events-none active:scale-95 flex items-center gap-1.5"
        onClick={NextandPreviusPage}
        disabled={Number(page) <= 1}
      >
        <i className="fa-solid fa-chevron-left text-[10px]" /> Voltar
      </button>

      <div className="flex items-center gap-1.5">
        {generatePage()}
      </div>

      <button
        className="h-9 px-4 text-xs font-semibold bg-gray-900/40 text-gray-400 border border-gray-800/80 rounded-xl hover:border-lime-500/30 hover:text-white transition-all duration-200 backdrop-blur-md disabled:opacity-20 disabled:pointer-events-none active:scale-95 flex items-center gap-1.5"
        onClick={NextandPreviusPage}
        disabled={Number(page) >= endMaxPage}
      >
        Avançar <i className="fa-solid fa-chevron-right text-[10px]" />
      </button>
    </div>
  );
};

export default Pagination;