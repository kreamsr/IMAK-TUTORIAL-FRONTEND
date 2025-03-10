import React from 'react'
import {assets} from '../assets/assets'


const Contact = () => {
  return (
    <div>
          <div className='text-center text-2xl pt-10 text-gray-500'>
            <p>CONTACT <span className='text-gray-700 font-medium'>US</span></p>
          </div>
        <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
          <img src={assets.contact_image} alt="" className="w-full max-w-[480px]" />
          <div className="flex flex-col justify-center items-start gap-6">
            <p className="font-semibold text-lg text-gray-600">Our School</p>
            <p className='text-gray-500'>   Piazza Sebara Babur 33030 <br /> Colfe 33033, Addis Ababa, Ethiopia</p>
            <p className='text-gray-500'>   Tel: +251918180038/+251955556050/+251901858932 <br /> Email: support@imak.com</p>
            <p className="font-semibold text-xl text-gray-600">Carrers at IMAK</p>
            <p className='text-gray-500'>Learn more about Imak and come join with its lovely community</p>
            <button className="border border-black rounded px-8 py-4 text-sm hover:bg-indigo-700  hover:text-white transition-all duration-500">Explore More</button>
          </div>
        </div>
       
    </div>
  )
}

export default Contact
