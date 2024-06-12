import React from 'react'
import {idata} from '../interfaces/interface'


const CardBanner = ({data}: idata) => {

  return (
    <aside className='rounded-md flex items-center justify-between w-[80%] m-auto text-[1.1em]'>
        <div className='bg-[#597C24] w-full h-[5.2em] flex items-center justify-center rounded-l-md p-8'>
            <p>{data.info} a</p>
        </div>
        <div className='bg-white w-[15em] h-[5.2em] text-[#6C8C3B] font-bold flex items-center justify-center rounded-r-md'>
            <button>SAIBA MAIS</button>
        </div>

    </aside>
  )
}

export default CardBanner