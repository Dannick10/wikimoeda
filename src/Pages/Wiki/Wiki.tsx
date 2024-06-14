import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { useWikiFetch } from "../../Hooks/useWikiFetch";

const Wiki = () => {

  const navigate = useNavigate()
  
  const handleSearch = (e: React.MouseEvent<HTMLElement>) => {
    const data = e.currentTarget.getAttribute("data-id")

    navigate('/wikires?q=' + data)
  };

  useEffect(() => {
    Aos.init();
  }, []);

  const TypeInvesting: object = {
    "Ação (finanças)": [
      "Investir em ações significa comprar uma parte de uma empresa.",
      "O investidor se torna um acionista da empresa, o que lhe dá direito a participar nos lucros e nas decisões da empresa.",
    ],
    "Tesouro Direto": [
      "O Tesouro Direto é um programa do governo brasileiro que permite a compra de títulos públicos pela internet.",
      "São investimentos de baixo risco e com diferentes prazos de vencimento.",
    ],
    "Fundo de investimento": [
      "Os fundos de investimento são uma forma de investir em uma carteira diversificada de ativos, gerenciada por um gestor profissional.",
      "Existem diversos tipos de fundos, como os de renda fixa, renda variável e multimercado.",
    ],
    "Aposentadoria": [
      "A previdência privada é uma forma de poupança de longo prazo que tem como objetivo garantir uma renda complementar no futuro, especialmente na aposentadoria.",
      "Pode ser contratada junto a bancos ou seguradoras.",
    ],
    "Derivativo": [
      "Os investimentos em derivativos são contratos financeiros cujo valor deriva do valor de um ativo subjacente.",
      "Exemplos comuns de derivativos incluem contratos futuros, opções e swaps.",
    ],
    "Commodity": [
      "Investir em commodities significa investir em matérias-primas ou produtos básicos, como ouro, petróleo, grãos, entre outros.",
      "É uma forma de diversificar uma carteira de investimentos.",
    ],
    "Investimentos alternativos": [
      "Os investimentos alternativos são aqueles que fogem dos tradicionais, como ações e títulos.",
      "Podem incluir investimentos em imóveis, obras de arte, private equity, entre outros.",
    ],
    "Investimento estrangeiro direto": [
      "Investir internacionalmente significa aplicar recursos financeiros em ativos fora do país de origem do investidor.",
      "Isso pode incluir ações de empresas estrangeiras, títulos de dívida de governos estrangeiros, entre outros ativos.",
    ],
  };

  return (
    <>
      <section className="flex flex-col gap-10 items-center">
        <h2
          className="text-xl text-center text-lime-400 font-black tracking-wider"
          data-aos="fade-right"
          data-aos-duration="800"
        >
          Tipo de Investimentos
        </h2>

        <div className="flex flex-col gap-10 w-[80%] lg:w-[60%]">
          {Object.entries(TypeInvesting).map((name, index) => (
            <>
              <aside
                className="border-l border-b border-b-lime-400 border-l-lime-400 px-3 relative"
                data-aos="fade-up"
                key={index}
              >
                <h2 className="py-3 text-lg font-bold text-lime-400">{name[0]}</h2>

                <div className="group">
                <i className="fa-solid fa-circle-info absolute right-4 top-4 text-lime-400"></i>
                <span className="absolute z-10  px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg shadow-sm group-hover:block tooltip top-10 right-0 hidden">
                     <i className="fa-solid fa-caret-up -top-2 right-2 absolute text-white text-xl"></i>
                    {name[1][1]}
                </span>
                </div>
                
                <p>{name[1][0]}</p>
        
                <button className="bg-lime-700 py-1 px-4 rounded-sm m-4 block hover:bg-lime-800" onClick={handleSearch} data-id={name[0]}>
                  Saiba mais
                </button>
              </aside>
            </>
          ))}
        </div>
      </section>
    </>
  );
};

export default Wiki;
