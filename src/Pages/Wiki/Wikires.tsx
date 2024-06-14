import React from "react";
import { useWikiFetch } from "../../Hooks/useWikiFetch";
import DOMPurify from "dompurify";

import styles from "./Wikires.module.css";
import Loading from "../../components/Loading";

const Wikires = () => {
  const paramsString: string = window.location.search;
  const urlParams: URLSearchParams = new URLSearchParams(paramsString);

  const dataValue: string | null = urlParams.get("q");
  console.log(dataValue);

  const url: string = `https://pt.wikipedia.org/w/api.php?action=parse&page=${dataValue}&format=json&prop=text&origin=*`;

  const { data, loading } = useWikiFetch(url);

  if (!data) {
    return (
      <>
        <div className="flex flex-col items-center justify-cente p-10 gap-4 my-10 text-lime-400">
          <h2 className="text-lg font-bold">
            Desculpe, Não foi possivel estabelecer uma conexão tente novamente
            mais tarde
          </h2>
          <i className="fa-regular fa-face-sad-tear text-xl"></i>
          <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-lime-700 rounded-lg hover:bg-lime-800 focus:ring-4 focus:outline-none focus:ring-lime- gap-2">
            Voltar para página anterior{" "}
            <i className="fa-solid fa-rotate-left"></i>
          </button>
        </div>
      </>
    );
  }

  const sanitizedHtml: string = DOMPurify.sanitize(data.parse.text["*"]);

  return (
    <div className={styles.wikires}>
      <h2>{data.parse.title}</h2>

      {!loading ? (
        <>
          <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />
        </>
      ) : (
        <>
          <Loading />
        </>
      )}
    </div>
  );
};

export default Wikires;
