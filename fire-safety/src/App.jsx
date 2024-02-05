import { useState } from 'react'

//css
import './App.css'

import { Route, Routes } from 'react-router-dom'

//pages
import About from './pages/About/About'
import NavBar from './components/NavBar/NavBar'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/about' element={<About />} />
      </Routes>
    </>
  )
}

export default App
