import { useState, useEffect } from "react";
import { useFetch } from "../../Hooks/useFetch";
import Loading from "../../components/Loading";
import Aos from "aos";
import "aos/dist/aos.css";

const Conversor = () => {

  useEffect(() => {
    Aos.init();
  }, []);

  const currency = (num: number, cur: string): string => {
    let convert = new Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: cur,
    });

    return convert.format(num);
  };

  const query: string[] = [
    "BRL",
    "USD",
    "EUR",
    "AUD",
  ];

  const [oneSymbol, SetoneSymbol] = useState("USD");
  const [twoSymbol, SettwoSymbol] = useState("BRL");

  const url: string = `https://economia.awesomeapi.com.br/json/last/${oneSymbol}-${twoSymbol}`;
  const { data, loading } = useFetch(url);

  const [calCoin, SetCalCoin] = useState<number>(1);

  if (loading) {
    return <Loading />;
  }

  return (
    <section className="flex flex-col  items-center justify-center mb-40 gap-4"  data-aos="fade-right"
    data-aos-duration="1000">
      <section className="max-w-md max-auto flex flex-col gap-2 justify-center items-center ">
        <h2>Conversor de moedas</h2>
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-center px-2 rounded-s-md gap-2 relative">
            <select
              value={oneSymbol}
              onChange={(event) => SetoneSymbol(event.target.value)}
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              <option selected disabled>
                Escolha a moeda
              </option>
              {query.map((coin) => (
                  <>
                  {coin != twoSymbol && 
                    <option value={coin}>{coin}</option>
                  }
                  
                </>
              ))}
            </select>
          </div>
          <div className="flex items-center justify-center px-2 gap-2">
            <select
              value={twoSymbol}
              onChange={(event) => SettwoSymbol(event.target.value)}
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              <option selected disabled>
                Escolha a moeda
              </option>
              {query.map((coin) => (
                <>
                {console.log(coin)}
                  {coin != oneSymbol && 
                    <option value={coin}>{coin}</option>
                  }
                  
                </>
              ))}
            </select>
          </div>
          <input
            type="number"
            className="bg-gray-600 rounded-s-sm p-1 "
            onChange={(e) => SetCalCoin(parseInt(e.target.value))}
            value={calCoin}
            min="1"
          />
        </div>
      </section>
      <aside>
        <h2>
          {" "}
          Resultado é{" "}
          {data &&
            Object.values(data).map((e) => currency(e.bid * calCoin, e.code))}
        </h2>
      </aside>
    </section>
  );
};

export default Conversor;
