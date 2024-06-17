import { useEffect } from "react";
import Aos from "aos";
import "Aos/dist/aos.css";

import main from "/main.png";

import { useFetch } from "../../Hooks/useFetch";
import { useNoticiasFetch } from "../../Hooks/useNoticiasFetch";

import CardBanner from "../../components/CardBanner";
import CoinSection from "../../components/CoinSection";
import Loading from "../../components/Loading";

const Home = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const query: string =
    "USD-BRL,EUR-BRL,BTC-BRL,ETH-BRL,CAD-BRL,GBP-BRL,ARS-BRL,LTC-BRL,JPY-BRL,CHF-BRL,AUD-BRL,CNY-BRL,ILS-BRL,XRP-BRL";

  const url: string = `https://economia.awesomeapi.com.br/json/last/${query}`;

  const { data: coinFetch, loading } = useFetch(url);

  const { data: noticiasFetch, loading: loadingNoticias } = useNoticiasFetch(
    "https://servicodados.ibge.gov.br/api/v3/noticias/?busca=economia?page=1?qtd=1"
  );

  return (
    <main className="flex flex-col gap-[5em] my-8">
      <section className="flex flex-col items-center justify-around gap-20 px-8 mt-5 lg:flex-row lg:px-20 text-center">
        <div
          className="flex flex-col items-center gap-20"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <h3 className="text-2xl font-Rubik">Wikimoeda</h3>
          {loadingNoticias && <Loading />}
          <p className="text-xl">
            Mantenha-se atualizado com as últimas cotações, notícias e
            informações detalhadas sobre diversas moedas, incluindo o Real,
            Dólar e Bitcoin, tudo isso no Wikimoeda.
          </p>
        </div>
        <div className="relative" data-aos="fade-left" data-aos-duration="1000">
          <img src={main} alt="" className="w-[60vw] lg:w-[60em]" />
          <div className="bg-[#6C8C3B] absolute w-[30em] h-[30em] top-0 right-0 -z-10 rounded-full blur-3xl opacity-20"></div>
        </div>
      </section>

      <section
        className="my-6 text-center flex flex-col gap-4"
        data-aos="fade-right"
        data-aos-duration="500"
      >
        <h2>
          ultimas <span className="text-lime-400">noticias</span> no mundo da{" "}
          <b>economia</b>
        </h2>
        {noticiasFetch && (
          <>
            <CardBanner data={noticiasFetch} />
          </>
        )}
      </section>

      {loading ? <Loading /> : <CoinSection data={coinFetch} />}
    </main>
  );
};

export default Home;
