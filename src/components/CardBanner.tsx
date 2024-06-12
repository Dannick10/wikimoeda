import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Inoticias } from '../interfaces/Inoticiasinterface'

interface props {
  data: any
}

const CardBanner = ({data}: props) => {
  
  return (
    <aside className='rounded-md flex items-center justify-between w-[80%] m-auto text-[1.1em]'>
        <div className='bg-[#597C24] w-full h-[5.2em] flex items-center justify-center rounded-l-md p-8'>
          {data && <>
              {data[0].titulo}
          </>}
        </div>
        <Link to={'/noticias'} className='bg-white w-[15em] h-[5.2em] text-[#6C8C3B] font-bold flex items-center justify-center rounded-r-md hover:text-lime-800 transition-all ease-linear duration-300'>
            <p>SAIBA MAIS</p>
        </Link>

    </aside>
  )
}

export default CardBanner