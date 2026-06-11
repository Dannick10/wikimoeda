import moeda from "/moeda.png";
import { FaCircleInfo, FaArrowUpLong, FaArrowDownLong } from "react-icons/fa6";
import { Icoin } from "../interfaces/IcoinInterface";

interface props {
  data?: Record<string, Icoin>;
}

const CoinSection = ({ data }: props) => {
  const currency = (num: number, cur: string): string => {
    const convert = new Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: cur,
    });

    return convert.format(num);
  };

  const getChangeIcon = (change: number) => {
    if (change > 0) return <FaArrowUpLong className="w-4 h-4" />;
    if (change < 0) return <FaArrowDownLong className="w-4 h-4" />;
    return "—";
  };

  const getChangeColor = (change: number) => {
    if (change > 0) return "text-emerald-500 bg-emerald-950/30";
    if (change < 0) return "text-red-500 bg-red-950/30";
    return "text-gray-400 bg-gray-800/30";
  };

  return (
    <section className="flex flex-col gap-8  md:px-10">
      <div className="space-y-4">
        <div className="flex gap-4 items-start">
          <img
            src={moeda}
            alt="moeda ao vivo"
            className="h-16 w-16 object-contain"
          />
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-3xl font-bold text-white">
                Cotações em Tempo Real
              </h2>
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-lime-400"></span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Acompanhe as cotações de moedas e criptomoedas em relação ao Real
              Brasileiro.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-900/40 backdrop-blur-md border border-gray-800/60 md:rounded-2xl overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gradient-to-r from-gray-950 to-gray-950 border-b border-gray-700/50 sticky top-0">
              <tr>
                <th scope="col" className="px-6 py-4 text-left">
                  <div className="flex items-center gap-2">
                    <span className="text-white font-semibold">Moeda</span>
                    <FaCircleInfo
                      className="text-gray-500 text-xs hover:text-lime-400 cursor-help transition-colors"
                      title="Nome e código da moeda"
                    />
                  </div>
                </th>
                <th scope="col" className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <span className="text-white font-semibold">Compra</span>
                    <FaCircleInfo
                      className="text-gray-500 text-xs hover:text-lime-400 cursor-help transition-colors"
                      title="Preço de compra (BID) em Real"
                    />
                  </div>
                </th>
                <th scope="col" className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <span className="text-white font-semibold">Venda</span>
                    <FaCircleInfo
                      className="text-gray-500 text-xs hover:text-lime-400 cursor-help transition-colors"
                      title="Preço de venda (ASK) em Real"
                    />
                  </div>
                </th>
                <th scope="col" className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <span className="text-white font-semibold">Máxima</span>
                    <FaCircleInfo
                      className="text-gray-500 text-xs hover:text-lime-400 cursor-help transition-colors"
                      title="Maior cotação do dia em Real"
                    />
                  </div>
                </th>
                <th scope="col" className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <span className="text-white font-semibold">Mínima</span>
                    <FaCircleInfo
                      className="text-gray-500 text-xs hover:text-lime-400 cursor-help transition-colors"
                      title="Menor cotação do dia em Real"
                    />
                  </div>
                </th>
                <th scope="col" className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <span className="text-white font-semibold">
                      Variação 24h
                    </span>
                    <FaCircleInfo
                      className="text-gray-500 text-xs hover:text-lime-400 cursor-help transition-colors"
                      title="Mudança percentual em 24 horas"
                    />
                  </div>
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-800/40">
              {data && Object.values(data).length > 0 ? (
                Object.values(data).map((item, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-800/30 transition-colors duration-150 group"
                  >
                    <td className="px-6 py-4">
                      <div className="flex flex-col gap-1">
                        <p className="font-bold text-white group-hover:text-lime-400 transition-colors text-base">
                          {item.code}
                        </p>
                        <p className="text-xs text-gray-400">
                          {item.name.replace("/Real Brasileiro", "").trim()}
                        </p>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <p className="text-white font-semibold">
                        {currency(Number(item.bid), "BRL")}
                      </p>
                      <p className="text-xs text-gray-500">compra</p>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <p className="text-white font-semibold">
                        {currency(Number(item.ask), "BRL")}
                      </p>
                      <p className="text-xs text-gray-500">venda</p>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <p className="text-emerald-400 font-semibold">
                        {currency(Number(item.high), "BRL")}
                      </p>
                      <p className="text-xs text-gray-500">topo</p>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <p className="text-red-400 font-semibold">
                        {currency(Number(item.low), "BRL")}
                      </p>
                      <p className="text-xs text-gray-500">fundo</p>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div
                        className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg font-semibold ${getChangeColor(
                          Number(item.pctChange),
                        )}`}
                      >
                        {getChangeIcon(Number(item.pctChange))}
                        <span>{Number(item.pctChange).toFixed(2)}%</span>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={6}
                    className="px-6 py-8 text-center text-gray-400"
                  >
                    <p>Carregando cotações...</p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default CoinSection;
