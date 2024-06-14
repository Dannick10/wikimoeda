import React, { useState } from "react";

import { useWikiFetch } from "../../Hooks/useWikiFetch";

const Wiki = () => {
  /*
    const {data, loading} = useWikiFetch('https://pt.wikipedia.org/w/api.php?action=query&format=json&titles=bitcoin&prop=revisions&rvprop=content&origin=*')*/

  const handleSearch = () => {

  };

  const TypeInvesting:object = {
    "Ações": [
      "Investir em ações significa comprar uma parte de uma empresa.",
      "O investidor se torna um acionista da empresa, o que lhe dá direito a participar nos lucros e nas decisões da empresa."
    ],
    "Tesouro Direto": [
      "O Tesouro Direto é um programa do governo brasileiro que permite a compra de títulos públicos pela internet.",
      "São investimentos de baixo risco e com diferentes prazos de vencimento."
    ],
    "Fundos de Investimento": [
      "Os fundos de investimento são uma forma de investir em uma carteira diversificada de ativos, gerenciada por um gestor profissional.",
      "Existem diversos tipos de fundos, como os de renda fixa, renda variável e multimercado."
    ],
    "Previdência Privada": [
      "A previdência privada é uma forma de poupança de longo prazo que tem como objetivo garantir uma renda complementar no futuro, especialmente na aposentadoria.",
      "Pode ser contratada junto a bancos ou seguradoras."
    ],
    "Investimento em Derivativos": [
      "Os investimentos em derivativos são contratos financeiros cujo valor deriva do valor de um ativo subjacente.",
      "Exemplos comuns de derivativos incluem contratos futuros, opções e swaps."
    ],
    "Investimento em Commodities": [
      "Investir em commodities significa investir em matérias-primas ou produtos básicos, como ouro, petróleo, grãos, entre outros.",
      "É uma forma de diversificar uma carteira de investimentos."
    ],
    "Investimentos Alternativos": [
      "Os investimentos alternativos são aqueles que fogem dos tradicionais, como ações e títulos.",
      "Podem incluir investimentos em imóveis, obras de arte, private equity, entre outros."
    ],
    "Investimentos Internacionais": [
      "Investir internacionalmente significa aplicar recursos financeiros em ativos fora do país de origem do investidor.",
      "Isso pode incluir ações de empresas estrangeiras, títulos de dívida de governos estrangeiros, entre outros ativos."
    ]
  };
  
  console.log(Object.entries(TypeInvesting))
  return (
    <>
      <section className="flex flex-col gap-10">
        <h2 className="text-xl text-center text-lime-400 font-black tracking-wider">
          Tipo de Investimentos
        </h2>

        <div className="px-10 flex flex-col gap-10 w-[80%]">
            {Object.entries(TypeInvesting).map((name) =>(<>
              <aside className="border-l border-b border-b-lime-400 border-l-lime-400 px-3">
                <h2 className="py-3 text-lg font-bold text-lime-400">{name[0]}</h2>
                <p>{name[1]}</p>
                <button className="bg-lime-700 py-1 px-4 rounded-sm m-4 block hover:bg-lime-800">Saiba mais</button>
              </aside>
            </>))}
        </div>
      </section>
    </>
  );
};

export default Wiki;
