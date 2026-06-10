import React, { useEffect } from "react";
import { useNoticiasFetch } from "../../Hooks/useNoticiasFetch";
import Aos from "aos";
import "aos/dist/aos.css";
import Loading from "../../components/Loading";
import Pagination from "../../components/Pagination";
import { NoticiaItem } from "../../interfaces/Inoticia";
import { TitlePage } from "../../components/TitlePage";

const Noticias = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const {
    data: noticiasFetch,
    loading: loadingNoticias,
    page,
    SetPage,
  } = useNoticiasFetch(
    "https://servicodados.ibge.gov.br/api/v3/noticias/?busca=economia",
  );

  const changePage = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const number = parseInt(button.innerText);
    window.scroll(0, 0);
    SetPage(number);
  };

  const nextandpreviuspage = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    window.scroll(0, 0);

    if (button.innerText === "Avançar") {
      SetPage(page + 1);
    } else {
      SetPage(page - 1);
    }
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-12 min-h-screen flex flex-col gap-8">

      <TitlePage
        title=" Notícias Econômicas"
        description="Atualizações em tempo real integradas via API do IBGE"
        icon="fa-newspaper"
      />

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch justify-center w-full">
        {loadingNoticias && (
          <div className="col-span-full flex items-center justify-center py-20">
            <Loading />
          </div>
        )}

        {!loadingNoticias &&
          noticiasFetch &&
          Object.values(noticiasFetch.items as NoticiaItem[]).map((noticia, index) => (
            <aside
              key={noticia.id}
              className="bg-gray-900/40 backdrop-blur-md border border-gray-800/80 hover:border-lime-500/30 rounded-2xl flex flex-col justify-between transition-all duration-300 p-5 group shadow-lg"
              data-aos="fade-up"
             data-aos-delay={index * 50}
            >
              <div className="flex flex-col gap-3">
                <span className="text-[10px] font-semibold text-gray-500 tracking-wider uppercase">
                  {noticia.data_publicacao
                    ? noticia.data_publicacao.split("T")[0].replace(/-/g, "/")
                    : "Recente"}
                </span>
                <h3 className="text-base font-bold text-white group-hover:text-lime-400 transition-colors duration-200 line-clamp-3 leading-snug">
                  {noticia.titulo}
                </h3>
                <p className="text-gray-400 text-xs font-normal leading-relaxed line-clamp-4 mb-4">
                  {noticia.introducao}
                </p>
              </div>

              <div className="pt-2 border-t border-gray-800/60 mt-auto flex justify-between items-center">
                <a
                  href={noticia.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center text-xs font-semibold text-gray-400 hover:text-gray-950 bg-gray-950/40 hover:bg-lime-500 border border-gray-800 hover:border-lime-500/20 py-2 px-3.5 rounded-xl transition-all duration-200 gap-2 shadow-inner active:scale-95"
                >
                  Ler matéria completa
                  <svg
                    className="w-3 h-3 transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </aside>
          ))}
      </section>

      <nav className="mt-auto pt-8 flex justify-center border-t border-gray-800/40">
        {noticiasFetch && (
          <Pagination
            endMaxPage={noticiasFetch?.totalPages}
            page={page}
            changePage={changePage}
            NextandPreviusPage={nextandpreviuspage}
          />
        )}
      </nav>
    </section>
  );
};

export default Noticias;
