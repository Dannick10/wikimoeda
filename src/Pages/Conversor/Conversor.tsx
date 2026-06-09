import { useState, useEffect } from "react";
import { useFetch } from "../../Hooks/useFetch";
import Loading from "../../components/Loading";
import { FaCoins } from "react-icons/fa6";
import { HiArrowsRightLeft } from "react-icons/hi2";
import Aos from "aos";
import "aos/dist/aos.css";
import { Icoin } from "../../interfaces/IcoinInterface";



interface FetchResponse {
  [key: string]: Icoin;
}

const Conversor = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const currencies: string[] = [
    "BRL", "USD", "EUR", "GBP", "ARS", "CAD", "AUD", "JPY", "CHF", "CNY"
  ];

  const [oneSymbol, setOneSymbol] = useState("USD");
  const [twoSymbol, setTwoSymbol] = useState("BRL");
  const [calCoin, setCalCoin] = useState<number>(1);

  const url = `https://economia.awesomeapi.com.br/json/last/${oneSymbol}-${twoSymbol}`;
  const { data, loading } = useFetch<FetchResponse>(url);

  const formatCurrency = (num: number, cur: string): string => {
    const locale = cur === "BRL" ? "pt-BR" : "en-US";
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency: cur,
    }).format(num);
  };

  const invertCurrencies = () => {
    const temp = oneSymbol;
    setOneSymbol(twoSymbol);
    setTwoSymbol(temp);
  };

  if (loading) {
    return <Loading />;
  }

  const currentPairKey = `${oneSymbol}${twoSymbol}`;
  const coinInfo = data && data[currentPairKey] ? data[currentPairKey] : null;

  return (
    <section 
      className="flex items-center justify-center min-h-[60vh] px-4 mb-20"
      data-aos="zoom-in"
      data-aos-duration="800"
    >
      <div className="w-full max-w-md backdrop-blur-md border border-gray-800 rounded-2xl p-6 shadow-2xl flex flex-col gap-6">
        
        <div className="flex flex-col gap-1 border-b border-gray-800 pb-4">
          <h2 className="text-xl font-semibold text-white tracking-wide">Conversor de Moedas</h2>
          {coinInfo ? (
            <p className="text-xs text-gray-400 font-medium">{coinInfo.name}</p>
          ) : (
            <p className="text-xs text-gray-500">Selecione as moedas para conversão</p>
          )}
        </div>

        <div className="flex flex-col gap-4">
          
          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 bg-gray-950/50 p-2 rounded-xl border border-gray-800/60">

            <div className="flex flex-col gap-1 px-2">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">De</label>
              <select
                value={oneSymbol}
                onChange={(e) => setOneSymbol(e.target.value)}
                className="bg-transparent text-white font-semibold text-base outline-none cursor-pointer w-full py-1"
              >
                {currencies.map((coin) => (
                  coin !== twoSymbol && <option key={`from-${coin}`} value={coin} className="bg-gray-900 text-white">{coin}</option>
                ))}
              </select>
            </div>

            <button 
              type="button"
              onClick={invertCurrencies}
              className="p-2.5 rounded-lg bg-gray-800 hover:bg-lime-500 text-gray-400 hover:text-gray-950 transition-all duration-200 shadow-md active:scale-95"
              title="Inverter Moedas"
            >
              <HiArrowsRightLeft className="w-4 h-4" />
            </button>

            <div className="flex flex-col gap-1 px-2 text-right">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Para</label>
              <select
                value={twoSymbol}
                onChange={(e) => setTwoSymbol(e.target.value)}
                className="bg-transparent text-white font-semibold text-base outline-none cursor-pointer w-full py-1 text-right"
              >
                {currencies.map((coin) => (
                  coin !== oneSymbol && <option key={`to-${coin}`} value={coin} className="bg-gray-900 text-white">{coin}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="number" className="text-xs font-medium text-gray-400">Quantia a converter</label>
            <div className="relative group">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-lime-400 transition-colors duration-200 border-r border-gray-800 pr-3">
                <FaCoins className="w-4 h-4" />
              </span>
              <input
                type="number"
                id="number"
                name="number"
                className="w-full bg-gray-950/40 border border-gray-800 focus:border-lime-500 text-white rounded-xl py-3 pl-14 pr-4 outline-none transition-all duration-200 text-lg font-medium shadow-inner placeholder-gray-600"
                onChange={(e) => {
                  const val = parseFloat(e.target.value);
                  setCalCoin(isNaN(val) ? 0 : val);
                }}
                placeholder="0,00"
                value={calCoin === 0 ? "" : calCoin}
                min="0"
                step="any"
              />
            </div>
          </div>

        </div>

        <div className="mt-2 bg-gradient-to-r from-lime-600 to-lime-500 p-4 rounded-xl text-center shadow-lg relative overflow-hidden group">
          <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-lime-950 opacity-80 block mb-1">
            Resultado Convertido
          </span>
          <p className="text-2xl font-bold text-gray-950 tracking-tight">
            {coinInfo 
              ? formatCurrency(Number(coinInfo.bid) * calCoin, twoSymbol)
              : "Calculando..."}
          </p>
        </div>

      </div>
    </section>
  );
};

export default Conversor;