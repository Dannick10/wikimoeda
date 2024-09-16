import { useEffect } from "react";
import { useNoticiasFetch } from "../../Hooks/useNoticiasFetch";
import Aos from "aos";
import "aos/dist/aos.css";
import Loading from "../../components/Loading";
import Pagination from "../../components/Pagination";

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
    "https://servicodados.ibge.gov.br/api/v3/noticias/?busca=economia"
  );

  const changePage = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    let number = parseInt(button.innerText);
    scroll(0, 0);
    SetPage(number);
  };

  const nextandpreviuspage = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    scroll(0, 0)

    if (button.innerText == "Avançar") {
      SetPage(page + 1);
    } else {
      SetPage(page - 1);
    }
  };

  return (
    <div className="p-4">
      <header className="p-6">
        <div className="flex items-center gap-2 justify-between">
          <h1 className="text-xl">Notícias em tempo real sobre a economia</h1>
          <i className="fa-solid fa-newspaper"></i>
        </div>

        <hr />
      </header>

      <section className="flex flex-wrap justify-evenly gap-10">
        {loadingNoticias && <Loading />}
        {noticiasFetch &&
          Object.values(noticiasFetch.items).map((noticias) => (
            <>
              <div
                id={noticias.id}
                className="max-w-sm border border-gray-200 rounded-lg shadow-inner"
                key={noticias.id}
                data-aos="fade-up"
                data-aos-duration="800"
              >
                <div className="p-5 flex flex-col justify-between h-full">
                  <div>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-lime-500">
                      {noticias.titulo}
                    </h5>
                  </div>

                  <div>
                    <p className="mb-3 font-normal text-gray-200">
                      {noticias.introducao}
                    </p>
                  </div>

                  <div>
                    <p className="right-full text-slate-300">
                      {noticias.data_publicacao.split("T")[0]}
                    </p>
                    <a
                      href={noticias.link}
                      target="_blank"
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-lime-700 rounded-lg hover:bg-lime-800 focus:ring-4 focus:outline-none focus:ring-lime-300"
                    >
                      Ir para pagina da noticia
                      <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </>
          ))}
      </section>
      <nav>
        {noticiasFetch && 
        <Pagination
        endMaxPage={noticiasFetch?.totalPages}
        page={page}
        changePage={changePage}
        NextandPreviusPage={nextandpreviuspage}
        />
      }
      </nav>
    </div>
  );
};

export default Noticias;
