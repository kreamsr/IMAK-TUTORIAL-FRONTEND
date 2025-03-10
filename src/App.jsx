import React from 'react'
import {assets} from './assets/assets'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Lecturers from './pages/Lecturers'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Appointment from './pages/Appointment'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import StudentSchedule from './pages/StudentSchedule'


const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />
      <Routes>
        <Route path='/' element= {<Home />} />
        <Route path='/about' element= {<About />} />
        <Route path='/contact' element= {<Contact />} />
        <Route path='/lecturers' element= {<Lecturers />} />
        <Route path="/lecturers/:subject" element={<Lecturers />} />
        <Route path='/login' element= {<Login />} />
        <Route path='/profile' element= {<Profile />} />
        <Route path='/schedule' element= {<StudentSchedule />} />
        <Route path='/appointment/:techId' element= {<Appointment />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
