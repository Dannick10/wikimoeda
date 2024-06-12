import React from 'react'
import Header from './components/Header/Header'
import Home from './Pages/Home'

import { BrowserRouter,Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className='font-poppins'>
      <BrowserRouter>
      <Header/>
      <div className='py-24'>
      <Routes>
        <Route path='/' Component={Home}/>
      </Routes>
      </div>
      </BrowserRouter>
    </div>
  )
}

export default App