import React from 'react'
import {assets} from '../assets/assets'


const About = () => {
  return (
    <div>
      <div >
          <div className='text-center text-2xl pt-10 text-gray-500'>
            <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
            </div>
        </div>
        <div className="my-10 flex flex-col md:flex-row gap-12 ">
          <img src={assets.about_image} alt="" className="w-full max-w-[360px]" />
          <div className="flex flex-col justify-center gap-6 text-gray-600 text-sm md:w-2/4">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo reiciendis deleniti  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, voluptate.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus minus, totam, quisquam itaque a.Lorem8iwdfh pief ojiue iyeryu iowenfs owyr iwyrtow iwufbdf iwueb kwjdhb klhsdfbwkg </p>
            <b className='text-gray-800'>Our Vision</b>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ullam beatae veniam nihil, dolore fuga. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores soluta incidunt, voluptatibus culpa minima quidem aut non at adipisci per</p>
          </div>
        </div>


        <div className="text-xl py-4">
          <div className='text-center text-2xl pt-10 text-gray-500'>
              <p>WHY <span className='text-gray-700 font-medium'>US</span></p>
          </div>
          
        </div>
        <div className="mb-20 flex flex-col md:flex-row text-sm gap-5 ">
          <div className="border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 hover:shadow-lg hover:bg-indigo-700 hover:text-white hover:rounded-lg transition-all duration-500">
                <b>Outstanding Lecturers:</b>
                <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non deleniti ullam fugit corporis.</p>
          </div>
          <div className="border px-10 border-gray-300 md:px-16 py-8 sm:py-20 flex flex-col gap-5 hover:shadow-lg hover:bg-indigo-700 hover:text-white hover:rounded-lg transition-all duration-500">
                <b>Sense Responsibleness: </b>
                <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non deleniti ullam fugit corporis.</p>
          </div>
          <div className="border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 hover:shadow-lg hover:bg-indigo-700 hover:text-white hover:rounded-lg transition-all duration-500 ">
                <b>Trustworthiness:</b>
                <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non deleniti ullam fugit corporis.</p>
          </div>
        </div>
       
    </div>
  )
}

export default About

