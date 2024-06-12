import React from 'react'
import moeda from '/moeda.png'
import {Icoins} from '../interfaces/IcoinInterface'


const CoinSection = ({data}:Icoins) => {
 console.log(data)
const currency = (num:number, cur:string):string => {
    let convert = new Intl.NumberFormat('pt-br', {
        style: 'currency',
        currency: cur,
    });

    return convert.format(num)
}

  return (
    <section className='flex flex-col gap-4 px-[8em]'>
        <div className='flex gap-3 items-center'>
            <img src={moeda} alt="imagem de moeda" className='h-20 w-20'/>
            <h3>MOEDA AO VIVO</h3>
        </div>

        <div>
            <div className='flex items-center justify-between px-12 bg-[#1E1E1E] p-2 rounded-t-md'>
                <p>Moeda</p>
                <p>Preço</p>
                <p>Mudança</p>
            </div>

            {data && Object.values(data).map((d: Icoins) => (<>
            <div key={d.id} className='p-2 roundend-s-md  bg-gray-200 text-[#1E1E1E]  even:bg-gray-100'>
                <div className='flex items-center justify-between px-12'>
                    <p className='max-w-1'>{d.code} {d.name.split(' ')[0].replace('/Real','')}</p>
                    <p>{currency(d.bid,d.code)}</p>
                    <p style={ 
                        d.pctChange < 0 ? { color: 'red' } : 
                        d.pctChange > 0 ? 
                        { color: 'green' } : 
                        { color: '#1E1E1E' } }>{d.pctChange}%</p>
                </div>
            </div>
            </>))}
        </div>

    </section>
  )
}

export default CoinSection