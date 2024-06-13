import React, {useEffect, useState} from 'react'

import main from '/main.png'

import { useFetch } from '../../components/Hooks/useFetch'
import { useNoticiasFetch } from '../../components/Hooks/useNoticiasFetch'

import CardBanner from '../../components/CardBanner'
import CoinSection from '../../components/CoinSection'


const Home = () => {

    
    const [data,setdata] = useState<idata>({
        info: 'Dólar em disparada: entenda a alta da moeda e o que vem pela frente'
    })
    
    const [query,Setquery]  = useState<string>('USD-BRL,EUR-BRL,BTC-BRL,ETH-BRL,CAD-BRL,GBP-BRL,ARS-BRL,LTC-BRL,JPY-BRL,CHF-BRL,AUD-BRL,CNY-BRL,ILS-BRL,XRP-BRL')
    const [url,setUrl] = useState<string>(`https://economia.awesomeapi.com.br/json/last/${query}`)
    
    const {data:coinFetch, loading } = useFetch(url)

    const {data:noticiasFetch, loading:loadingNoticias} = useNoticiasFetch('https://servicodados.ibge.gov.br/api/v3/noticias/?busca=economia?page=1?qtd=1')

    console.log(noticiasFetch)

  return (
    <main className='flex flex-col gap-[5em] my-8'>
    <section className='flex items-center justify-around px-20 mt-5'>
        <div className='flex flex-col items-center gap-20'>
            <h3 className='text-2xl font-Rubik'>Wikimoeda</h3>
            <p className='w-4/6 text-xl'>Fique atualizado com as últimas cotações, notícias e informações detalhadas sobre diversas moedas, incluindo Real, Dólar e Bitcoin.</p>
        </div>
        <div className='relative'>
            <img src={main} alt="" className='w-[40em]' />
            <div className='bg-[#6C8C3B] absolute w-[30em] h-[30em] top-0 right-0 -z-10 rounded-full blur-3xl opacity-20'></div>
        </div>
    </section>

    <section className='my-6 text-center flex flex-col gap-4'>
        <h2>ultimas <span className='text-lime-400'>noticias</span> no mundo da <b>economia</b></h2>  
    {noticiasFetch && <>
    <CardBanner data={noticiasFetch.items}/>
    </>}
    </section>

    {loading ? (<div role="status">
    <svg aria-hidden="true" className="block w-20 h-20 m-auto text-gray-200 animate-spin dark:text-gray-600 fill-lime-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span className="sr-only">Loading...</span>
    </div>): <CoinSection data={coinFetch}/>}

    </main>
  )
}

export default Home