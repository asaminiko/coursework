import GeneralPage from './pages/GeneralPage'
import Home from './pages/Home'
import React from 'react'
import Auth from './pages/Auth'
import Register from './pages/Register'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Info from './pages/Info'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/general' element={<GeneralPage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/todo/:id' element={<Info />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
