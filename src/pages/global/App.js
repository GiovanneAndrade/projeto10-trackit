import Habitos from '../habitos/Habitos';
import Hoje from '../hoje/Hoje';
import Home from '../pagina-inicial/home/Home';
import Historico from '../historico/Historico';
import Registro from '../pagina-inicial/registro/Registro';
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import React from 'react'

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Registro' element={<Registro/>}/>
        <Route path='/Habitos' element={<Habitos/>}/>
        <Route path='/Hoje' element={<Hoje/>}/>
        <Route path='/Historico' element={<Historico/>}/>
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App