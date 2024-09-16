
import React from "react";

type Props = {
  page: number;
  totalItems: number;
  quantitforPage: number;
  endMaxPage: number
  changePage: (e: React.MouseEvent<HTMLButtonElement>) => void;
  NextandPreviusPage: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Pagination = ({
  page,
  totalItems,
  quantitforPage,
  changePage,
  endMaxPage,
  NextandPreviusPage,
}: Props) => {



  const totalPage = Math.ceil(totalItems / quantitforPage);
  const startPage = Math.max(page - 2, 1);
  const endPage = Math.min(page + 2, endMaxPage);

  const generatePage = () => {
    const list = [];

    for (let i = startPage; i <= endPage; i++) {
      list.push(
        <button
          className={`p-1 px-2 w-7 rounded-sm border-[1px] border-lime-400  ${Number(page) == i ? "bg-lime-50 text-black font-bold" : ""}`}
          onClick={changePage}
        >
          {i}
        </button>
      );
    }
    return list;
  };

  return (
    <div className="flex justify-center items-center pt-10">
      <button
        className={`p-1 px-2 w-15 border-[1px] border-lime-400 rounded-s-md ${Number(page) == 1 ? "opacity-5" : ""}`}
        onClick={NextandPreviusPage}
      >
        Voltar
      </button>
      {generatePage()}
      <button
        className={`p-1 px-2 w-15 border-[1px] border-lime-400 rounded-e-md  ${
          Number(page) === totalPage ? "opacity-5" : ""
        }`}
        onClick={NextandPreviusPage}
      >
        Avançar
      </button>
    </div>
  );
};

export default Pagination;
