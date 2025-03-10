import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'


const Navbar = () => {

  const navigate = useNavigate()

  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);


  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-300 '>
      <div onClick={() => navigate('/')} className="navlogo ">
        <img src={assets.logo} className='w-20 inline-block cursor-pointer' alt="" />
        <p className=' text-lg my-0  inline-block '>I-tutorials</p>
      </div>
      <ul className='hidden md:flex items-start gap-5  font-medium'>
          <NavLink to='/' className='' >
            <li className='py-1 hover:bg-indigo-100 rounded-lg px-0.5 transition-all duration-200'>HOME</li>
            <hr className='border-none outline-none h-0.5 bg-indigo-700 w-3/5 m-auto hidden' />
          </NavLink>
          <NavLink to='/lecturers' >
            <li className='py-1 hover:bg-indigo-100 rounded-lg px-0.5 transition-all duration-200'>LECTURERS</li>
            <hr className='border-none outline-none h-0.5 bg-indigo-700 w-3/5 m-auto hidden' />
          </NavLink>
          <NavLink to='/contact' >
            <li className='py-1 hover:bg-indigo-100 rounded-lg px-0.5 transition-all duration-200'>CONTACT</li>
            <hr className='border-none outline-none h-0.5 bg-indigo-700 w-3/5 m-auto hidden' />
          </NavLink>
          <NavLink to='/about' >
            <li className='py-1 hover:bg-indigo-100 rounded-lg px-0.5 transition-all duration-200'>ABOUT</li>
            <hr className='border-none outline-none h-0.5 bg-indigo-700 w-3/5 m-auto hidden ' />
          </NavLink>
      </ul>
      <div className='flex items-center gap-5'> 
        {
          token ?
            <div className='flex items-center gap-2 cursor-pointer group relative'>
              <img className='w-10 rounded-full' src={assets.profile_pic} alt="" />
              <img className='w-2.5' src={assets.dropdown_icon} alt="" />
              <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                  <p onClick={() => navigate('/profile')}  className='hover:text-black cursor-pointer'>Profile</p>
                  <p onClick={() => navigate('/appointment')} className='hover:text-black cursor-pointer'>Appointment</p>
                  <p onClick={() => setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
                </div>
              </div>
            </div>
          :
            <button onClick={() => navigate('/login')} className='bg-indigo-700 text-white px-5 py-3 rounded-full hover:bg-indigo-900 transition-all duration-200'>Create Account</button>
        }
        
      </div>
    </div>
  )
}

export default Navbar
