import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '/logo.png'

const Header = () => {
  return (
    <header className='flex items-center justify-between p-4 px-20 fixed z-10 w-full bg-[#0D0D0D] top-0 border-b-2 border-b-lime-400 links'>
        <div className='flex items-center gap-2'>
            <img src={logo} alt="" className='w-8' />
            <h2 className='text-2xl font-medium tracking-wider font-Rubik'>WIKI<span className='text-lime-400'>MOEDA</span></h2>
        </div>

        <nav>
            <ul className='grid grid-flow-col gap-x-2'>
                <NavLink to={'/'} className='cursor-pointer px-2 flex hover:text-lime-400 w-30'><p>Inicio</p></NavLink>
                <NavLink  to={'/cotacao'} className='cursor-pointer px-2 flex hover:text-lime-400 w-30'><p>Cotação</p></NavLink>
                <NavLink   to={'/wiki'}className='cursor-pointer px-2  hover:text-lime-400 w-30'>WIKI</NavLink>
                <NavLink  to={'/noticias'} className='cursor-pointer px-2  hover:text-lime-400 w-30 text-center'>Noticias</NavLink>
            </ul>
        </nav>
    </header>
  )
}

export default Header