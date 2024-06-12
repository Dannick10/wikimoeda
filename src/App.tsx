import React from 'react'
import Header from './components/Header/Header'
import Home from './Pages/Home'

import { BrowserRouter,Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className='font-poppins'>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' Component={Home}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App