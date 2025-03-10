import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div >
      
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] my-10 mt-40 gap-12  text-gray-600'>
          <div>
            <img src={assets.logo} alt=""  className=' inline mb-5 w-20'/>
            <span className='text-bold font-bold text-indigo-700 font-[cursive]'>I-tutorials</span>
            <p className="w-full md:w-2/3 text-gray-500">this is our official website, contact us , get registered and make your future more brighter with our beloved lecturers </p>
          </div>

          <div>
            <p className="text-xl py-6 text-bold font-lg ">COMPANY</p>
            <ul className="flex flex-col gap-2 text-gray-400 ">
              <li><Link to="/" className='hover:underline'>Home</Link></li>
              <li><Link to="/lecturers" className='hover:underline'>Lecturers</Link></li>
              <li><Link className='hover:underline' to="/about ">About</Link></li>
              <li><Link to="/contact" className='hover:underline'>Contact</Link></li>
            </ul>     
          </div>
          <div>
            <p className="text-xl py-6 text-bold font-lg ">REACH OUT</p>
            <ul className="flex flex-col gap-2 text-gray-400 ">
              <li>+251955556050</li>
              <li>support@itutorials.com</li>
            </ul>     
          </div>
        </div>
        <div>
          <hr  className=' border-none h-0.5 bg-gray-300'/>
          <p className="text-sm text-center py-5">Copyright @2025 itutorials.com-All Rights Are Reserved</p>
        </div>
    </div>
    
  )
}

export default Footer
