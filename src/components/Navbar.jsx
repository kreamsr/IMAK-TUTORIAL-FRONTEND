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
                  <p onClick={() => navigate('/schedule')} className='hover:text-black cursor-pointer'>Scheduled</p>
                  <p onClick={() => setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
                </div>
              </div>
            </div>
          :
            <button onClick={() => navigate('/login')} className='bg-indigo-700 text-white px-5 py-3 rounded-full hover:bg-indigo-900 transition-all duration-200'>Create Account</button>
        }
        <img onClick={() => setShowMenu(true)} className='w-6 md:hidden cursor-pointer' src={assets.menu_icon} alt="" />
        {/* menu  */}
        <div className={`${showMenu ? 'fixed w-full h-full' :' w-0 h-0'} md:hidden right-0 top-0 z-20 overflow-hidden bg-white `}>
          <div className='flex items-center justify-between px-5 py-6'>
            <img className='w-28 cursor-pointer' src={assets.logo} alt="" />
            <img className='w-7 cursor-pointer' onClick={() => setShowMenu(false)} src={assets.cross_icon} alt="" />
          </div>
          <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
            <NavLink onClick={() => setShowMenu(false)} to= {'/'}> <p  className='px-4 py-2 rounded-lg inline-block hover:bg-gray-100 rounded-lg hover:font-light'> Home</p> </NavLink>
            <NavLink  onClick={() => setShowMenu(false)} to= {'/lecturers'}><p className='px-4 py-2 rounded-lg inline-block hover:bg-gray-100 rounded-lg hover:font-light'>Lecturers</p></NavLink>
            <NavLink  onClick={() => setShowMenu(false)} to= {'/contact'}><p className='px-4 py-2 rounded-lg inline-block hover:bg-gray-100 rounded-lg hover:font-light'>Contact</p></NavLink>
            <NavLink  onClick={() => setShowMenu(false)} to= {'/about'}><p className='px-4 py-2 rounded-lg inline-block hover:bg-gray-100 rounded-lg hover:font-light'>About</p></NavLink>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
