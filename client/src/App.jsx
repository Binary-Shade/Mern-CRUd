import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import User from './components/User'
import Create from './components/Create'
import Update from './components/Update'


function App() {
  return (
    <>
      <div className='App w-full h-screen flex items-center justify-center'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<User />}></Route>
            <Route path='/create' element={<Create />}></Route>
            <Route path='/update' element={<Update />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
