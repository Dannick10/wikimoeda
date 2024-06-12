import React, {useEffect, useState} from 'react'

import main from '/main.png'

import CardBanner from '../components/CardBanner'
import CoinSection from '../components/CoinSection'

import {idata} from '../interfaces/interface'
import {Icoin} from '../interfaces/IcoinInterface' 

const Home = () => {

    const [data,setdata] = useState<idata>({
        info: 'Dólar em disparada: entenda a alta da moeda e o que vem pela frente'
    })

    const [coins,setCoins] = useState<Icoin>()
    const [query,Setquery]  = useState<string>('USD-BRL,EUR-BRL,BTC-BRL,ETH-BRL,CAD-BRL,GBP-BRL,ARS-BRL,LTC-BRL,JPY-BRL,CHF-BRL,AUD-BRL,CNY-BRL,ILS-BRL,XRP-BRL')
    const [url,setUrl] = useState<string>(`https://economia.awesomeapi.com.br/json/last/${query}`)

    useEffect(() => {
        const CoinFetch = async () => {
                try{
                    const res = await fetch(url)
                    const Datacoin = await res.json()
                    setCoins(Datacoin)
                }catch{
                        console.log('erro')
                }
            }
            CoinFetch()
        
    },[url])


  return (
    <main className='flex flex-col gap-[5em] my-8'>
    <section className='flex items-center justify-around px-20 mt-5'>
        <div className='flex flex-col items-center gap-5'>
            <h3 className='text-2xl font-Rubik'>Wikimoeda</h3>
            <p className='w-4/6 text-xl'>Fique atualizado com as últimas cotações, notícias e informações detalhadas sobre diversas moedas, incluindo Real, Dólar e Bitcoin.</p>
        </div>
        <div className='relative'>
            <img src={main} alt="" className='w-[40em]' />
            <div className='bg-[#6C8C3B] absolute w-[30em] h-[30em] top-0 right-0 -z-10 rounded-full blur-3xl opacity-20'></div>
        </div>
    </section>
    <CardBanner data={data} info={data.info}/>

    <CoinSection data={coins}/>

    </main>
  )
}

export default Home