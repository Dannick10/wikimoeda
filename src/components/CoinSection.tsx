import React from "react";
import moeda from "/moeda.png";
import { Icoin } from "../interfaces/IcoinInterface";

interface props {
  data?: Icoin;
}

const CoinSection = ({ data }: props) => {
  const currency = (num: number, cur: string): string => {
    let convert = new Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: cur,
    });

    return convert.format(num);
  };

  return (
    <section className="flex flex-col gap-4 px-[8em]">
      <div className="flex gap-3 items-center">
        <img src={moeda} alt="imagem de moeda" className="h-20 w-20" />
        <h3>MOEDA AO VIVO</h3>
        <span className="w-2 h-2 bg-lime-400 animate-pulse rounded-full"></span>
      </div>
      <div className="relative overflow-x-auto">
        <table className="w-full overflow-x-autow-full text-sm text-left rtl:text-right">
          <thead className="bg-[#1E1E1E]">
            <tr>
              <th scope="col" className="px-6 py-3">
                <p>Moeda</p>
              </th>
              <th scope="col" className="px-6 py-3">
                <p>Preço</p>
              </th>
              <th scope="col" className="px-6 py-3">
                <p>Alta</p>
              </th>
              <th scope="col" className="px-6 py-3">
                <p>Baixa</p>
              </th>
              <th scope="col" className="px-6 py-3">
                <p>Mudança</p>
              </th>
            </tr>
            <p></p>
          </thead>

          <tbody>
            {data &&
              Object.values(data).map((item) => (
                <>
                  <tr className="border-b bg-slate-200 odd:bg-slate-300 text-[#1E1E1E]">
                    <td className="px-6 py-4">
                      <p>
                        {item.code!} {item.name.replace("/Real Brasileiro", "")}
                      </p>
                    </td>
                    <td className="px-6 py-4">
                      <p>{currency(item.bid, item.code)}</p>
                    </td>
                    <td className="px-6 py-4">
                      <p>{currency(item.high, item.code)}</p>
                    </td>
                    <td className="px-6 py-4">
                      <p>{currency(item.low, item.code)}</p>
                    </td>
                    <td
                      className="px-6 py-4"
                      style={
                        item.pctChange < 0
                          ? { color: "red" }
                          : item.pctChange > 0
                          ? { color: "green" }
                          : { color: "#1E1E1E" }
                      }
                    >
                      <p>{item.pctChange}%</p>
                    </td>
                  </tr>
                </>
              ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default CoinSection;
