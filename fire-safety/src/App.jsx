import { useState } from 'react'

//css
import './App.css'

import { Route, Routes, useLocation } from 'react-router-dom'

//pages
import Details from './pages/Details/Details'
import About from './pages/About/About'
import ContactForm from './pages/ContactForm/ContactForm'

import NavBar from './components/NavBar/NavBar'

function App() {
  const location = useLocation()

  const isRootPath = location.pathname === '/'
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/details' element={<Details />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<ContactForm />} />
      </Routes>
      {isRootPath && (
        <main className="container">
          <div className="row">
            <div className="col-lg-8">
              <h1 className="display-4">Welcome to OSHA 2020 Consultants</h1>
              <img src="./fire-ex.jpeg" alt="Check Your Fire Extinguishers!" className="image-fluid" style={{ width: 'auto', height: 'auto' }} />
              <p className="lead">
                OSHA 2020 Consultants is your trusted partner for fire safety solutions. Serving the tri-state area, we specialize in a wide range of services to ensure the safety and compliance of your premises.
              </p>
              <p className='lead'>All of our Fire Guards are FDNY certified. Our fire guards can provide assistance for Impairments (F-01), Shelters (F-02), Temporary Assembly (F-04), Fire Safety Managers (S-56) and Temporary Heat (S-92). We have worked for corporate buildings, venues construction sites and many more. Whatever you need, we can provide you with the highest level of service.</p>
              <p className='lead'>We offer round-the-clock availability,<strong>24/7/365</strong>, to address any Fire Life Safety emergencies at your facility, ensuring compliance with local regulations and the continuous operation of your building.</p>
              <div className="col-lg-4">
                <img src="/fire-safety.png" alt="Fire Safety" className="img-fluid mt-5" />
                <p className="text-center">Contact us for a consultation:</p>
                <p className="text-center"><strong>Phone:</strong> +1 (347) 392-7031</p>
                <p className="text-center"><strong>Email:</strong> info@osha2020.com</p>
              </div>
            </div>
          </div>
        </main>
      )}
    </>
  )
}

export default App
