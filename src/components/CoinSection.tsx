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
                <div className='relative overflow-x-auto'>
                <table className='w-full overflow-x-autow-full text-sm text-left rtl:text-right'>
                <thead className='bg-[#1E1E1E]'>
                <tr>
                <th scope='col' className='px-6 py-3'>Moeda</th>
                <th scope='col' className='px-6 py-3'>Preço</th>
                        <th scope='col' className='px-6 py-3'>Alta</th>
                        <th scope='col' className='px-6 py-3'>Baixa</th>
                        <th scope='col' className='px-6 py-3'>Mudança</th>
                    </tr>
                </thead>
            <tbody>
            {data && Object.values(data).map((d: Icoins) => (<>
                <tr className='border-b bg-slate-200 odd:bg-slate-300 text-[#1E1E1E]'>
                    <td className='px-6 py-4'>{d.code} {d.name.replace('/Real Brasileiro','')}</td>
                    <td className='px-6 py-4'>{currency(d.bid,d.code)}</td>
                    <td className='px-6 py-4'>{currency(d.high,d.code)}</td>
                    <td className='px-6 py-4'>{currency(d.low,d.code)}</td>
                    <td className='px-6 py-4' style={ 
                        d.pctChange < 0 ? { color: 'red' } : 
                        d.pctChange > 0 ? 
                        { color: 'green' } : 
                        { color: '#1E1E1E' } }>{d.pctChange}%</td>
                </tr>
            </>))}
                 </tbody>
         </table>
        </div>
    </section>
  )
}

export default CoinSection