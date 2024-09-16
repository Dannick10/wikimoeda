import { useState, useEffect } from "react";
import { useFetch } from "../../Hooks/useFetch";
import Loading from "../../components/Loading";
import { FaCoins } from "react-icons/fa6";
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

  const query: string[] = ["BRL", "USD", "EUR", "AUD"];

  const [oneSymbol, SetoneSymbol] = useState("USD");
  const [twoSymbol, SettwoSymbol] = useState("BRL");

  const url: string = `https://economia.awesomeapi.com.br/json/last/${oneSymbol}-${twoSymbol}`;
  const { data, loading } = useFetch(url);

  const [calCoin, SetCalCoin] = useState<number>(1);

  if (loading) {
    return <Loading />;
  }

  return (
    <section
      className="flex flex-col items-center justify-center mb-40 gap-4"
      data-aos="fade-right"
      data-aos-duration="1000"
    >
      <section className=" flex flex-col gap-2 justify-center items-center ">
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
                <>{coin != twoSymbol && <option value={coin}>{coin}</option>}</>
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
                  {coin != oneSymbol && <option value={coin}>{coin}</option>}
                </>
              ))}
            </select>
          </div>
          <label htmlFor="number" className="relative">
            <span className="absolute top-0 left-0 translate-x-[50%] translate-y-[50%]
             after:h-8 after:w-[.1px] after:bg-gray-500 after:absolute after:-top-2 after:-right-3
            ">
              <FaCoins />
            </span>
            <input
              type="number"
              className="bg-gray-600 rounded-md p-1 indent-10 outline-none shadow-none focus:outline-lime-400"
              onChange={(e) => SetCalCoin(parseInt(e.target.value))}
              placeholder="digite o valor"
              value={calCoin}
              min="1"
              name="number"
            />
          </label>
        </div>
      </section>
        <div className="text-white ">
          <h3>{data && Object.values(data).map((coin) => coin.name)}</h3>
        </div>
      <aside className="border-2 p-2 rounded-lg bg-lime-600 min-w-40 text-center">
        <p>
          {data &&
            Object.values(data).map((coin) => currency(coin.bid * calCoin, coin.code))}
        </p>
      </aside>
    </section>
  );
};

export default Conversor;
