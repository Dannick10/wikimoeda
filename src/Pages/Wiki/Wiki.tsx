import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

const Wiki = () => {
  const navigate = useNavigate();

  const handleSearch = (e: React.MouseEvent<HTMLElement>) => {
    const data = e.currentTarget.getAttribute("data-id");
    if (data) {
      navigate('/wikires?q=' + encodeURIComponent(data));
    }
  };

  useEffect(() => {
    Aos.init();
  }, []);

  const TypeInvesting: Record<string, string[]> = {
    "Ação (finanças)": [
      "Investir em ações significa comprar uma parte de uma empresa.",
      "O investidor se torna um acionista da empresa, o que lhe dá direito a participar nos lucros e nas decisões da empresa.",
    ],
    "Tesouro Direto": [
      "O Tesouro Direto é um programa do governo brasileiro que permite a compra de títulos públicos pela internet.",
      "São investimentos de baixo risco e com diferentes prazos de vencimento.",
    ],
    "Fundo de investimento": [
      "Os fundos de investimento são uma forma de investir in uma carteira diversificada de ativos, gerenciada por um gestor profissional.",
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

  const TypeCoins: Record<string, string[]> = {
    "Real (moeda brasileira)": [
      "O Real (BRL) é a moeda oficial do Brasil desde 1994.",
      "É emitido pelo Banco Central do Brasil.",
    ],
    "Dólar dos Estados Unidos": [
      "O Dólar Americano (USD) é a moeda oficial dos Estados Unidos da América.",
      "É emitido pelo Federal Reserve, o banco central dos EUA.",
    ],
    "Euro": [
      "O Euro (EUR) é a moeda oficial de 19 dos 27 países membros da União Europeia.",
      "É emitido pelo Banco Central Europeu.",
    ],
    "Bitcoin": [
      "Bitcoin (símbolo: ₿; abreviado ISO 4217: BTC ou XBT) é uma criptoinvenção descentralizada e de código aberto, um dinheiro eletrônico para transações financeiras ponto a ponto.",
      "O bitcoin foi publicado em 2008 por Satoshi Nakamoto."
    ],
    "Ethereum": [
      "Ethereum é uma plataforma descentralizada capaz de executar contratos inteligentes e aplicações descentralizadas usando a tecnologia blockchain.",
      "O Ethereum foi fundado por Vitalik Buterin em janeiro de 2014."
    ],
    "Dólar Canadense": [
      "O Dólar Canadense (CAD) é a moeda oficial do Canadá.",
      "É emitido pelo Banco do Canadá.",
    ],
    "Peso Argentino": [
      "O Peso Argentino (ARS) é a moeda oficial da Argentina.",
      "É emitido pelo Banco Central da República Argentina.",
    ],
    "Litecoin": [
      "Litecoin (símbolo: Ł; abrev: LTC) é uma criptomoeda sustentada por uma rede peer-to-peer e um projeto de software livre.",
      "O Litecoin foi fundado por Charlie Lee"
    ],
    "Franco Suíço": [
      "O Franco Suíço (CHF) é a moeda oficial da Suíça e de Liechtenstein.",
      "É emitido pelo Banco Nacional Suíço.",
    ],
    "Dólar Australiano": [
      "O Dólar Australiano (AUD) é a moeda oficial da Austrália.",
      "É emitido pelo Banco da Reserva da Austrália.",
    ],
  };

  return (
    <section className="flex flex-col gap-12 items-center py-16 px-4 max-w-5xl mx-auto min-h-screen">
      
      <div className="w-full flex flex-col gap-6">
        <div className="flex flex-col gap-1 border-b border-gray-800 pb-4">
          <h2 className="text-xl font-semibold text-white tracking-wide" data-aos="fade-right" data-aos-duration="600">
            Tipos de Investimento
          </h2>
          <p className="text-xs text-gray-500">Explore os principais conceitos do mercado financeiro</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(TypeInvesting).map(([title, content], index) => (
            <aside
              key={`invest-${index}`}
              className="bg-gray-900/40 backdrop-blur-md border border-gray-800/80 hover:border-lime-500/40 p-5 rounded-2xl flex flex-col justify-between transition-all duration-300 group shadow-lg"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <div>
                <div className="flex justify-between items-start gap-4 mb-2">
                  <h3 className="text-base font-semibold text-white group-hover:text-lime-400 transition-colors duration-200">
                    {title}
                  </h3>
                  <div className="relative inline-block group/tooltip">
                    <i className="fa-solid fa-circle-info text-gray-600 group-hover/tooltip:text-lime-400 cursor-help transition-colors text-sm p-1" />
                    <span className="absolute z-30 w-60 p-3 text-xs text-gray-400 bg-gray-950 border border-gray-800 rounded-xl shadow-2xl pointer-events-none opacity-0 group-hover/tooltip:opacity-100 transition-opacity duration-200 top-7 right-0">
                      {content[1]}
                    </span>
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed font-normal">{content[0]}</p>
              </div>
              
              <button
                className="bg-gray-950/40 border border-gray-800 hover:border-lime-500/30 hover:bg-lime-500 text-gray-400 hover:text-gray-950 text-xs font-semibold py-2 px-4 rounded-xl mt-5 self-start transition-all duration-200 active:scale-95 shadow-inner"
                onClick={handleSearch}
                data-id={title}
              >
                Saiba mais
              </button>
            </aside>
          ))}
        </div>
      </div>

      <div className="w-full flex flex-col gap-6 mt-10">
        <div className="flex flex-col gap-1 border-b border-gray-800 pb-4">
          <h2 className="text-xl font-semibold text-white tracking-wide" data-aos="fade-right" data-aos-duration="600">
            Moedas Mundiais
          </h2>
          <p className="text-xs text-gray-500">Conheça os ativos monetários e criptomoedas globais</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(TypeCoins).map(([title, content], index) => (
            <aside
              key={`coin-${index}`}
              className="bg-gray-900/40 backdrop-blur-md border border-gray-800/80 hover:border-lime-500/40 p-5 rounded-2xl flex flex-col justify-between transition-all duration-300 group shadow-lg"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <div>
                <div className="flex justify-between items-start gap-4 mb-2">
                  <h3 className="text-base font-semibold text-white group-hover:text-lime-400 transition-colors duration-200">
                    {title}
                  </h3>
                  <div className="relative inline-block group/tooltip">
                    <i className="fa-solid fa-circle-info text-gray-600 group-hover/tooltip:text-lime-400 cursor-help transition-colors text-sm p-1" />
                    <span className="absolute z-30 w-60 p-3 text-xs text-gray-400 bg-gray-950 border border-gray-800 rounded-xl shadow-2xl pointer-events-none opacity-0 group-hover/tooltip:opacity-100 transition-opacity duration-200 top-7 right-0">
                      {content[1]}
                    </span>
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed font-normal">{content[0]}</p>
              </div>

              <button
                className="bg-gray-950/40 border border-gray-800 hover:border-lime-500/30 hover:bg-lime-500 text-gray-400 hover:text-gray-950 text-xs font-semibold py-2 px-4 rounded-xl mt-5 self-start transition-all duration-200 active:scale-95 shadow-inner"
                onClick={handleSearch}
                data-id={title}
              >
                Saiba mais
              </button>
            </aside>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Wiki;