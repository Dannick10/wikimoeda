import React from 'react'
import { Link } from 'react-router-dom'
import logo from '/logo.png'

const Header = () => {
  return (
    <header className='flex items-center justify-between p-4 px-20'>
        <div className='flex items-center gap-2'>
            <img src={logo} alt="" className='w-8' />
            <h2 className='text-2xl font-medium tracking-wider font-Rubik'>WIKI<span className='text-[#BFB630]'>MOEDA</span></h2>
        </div>

        <nav>
            <ul className='grid grid-flow-col gap-x-2'>
                <Link to={'/'} className='cursor-pointer border-r px-2 flex hover:text-[#BFB630] w-30'><p>Inicio</p></Link>
                <Link  to={'/'} className='cursor-pointer border-r px-2 flex hover:text-[#BFB630] w-30'><p>Cotação</p></Link>
                <Link   to={'/'}className='cursor-pointer border-r px-2  hover:text-[#BFB630] w-30'>WIKI</Link>
                <Link  to={'/'} className='cursor-pointer px-2  hover:text-[#BFB630] w-30 text-center'>Noticias</Link>
            </ul>
        </nav>
    </header>
  )
}

export default Header