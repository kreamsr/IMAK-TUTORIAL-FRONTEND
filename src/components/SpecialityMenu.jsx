import React from 'react'
import {subjectData} from '../assets/assets'
import {Link, Navigate, useNavigate} from 'react-router-dom'

const SpecialityMenu = () => {
    const navigate = useNavigate();
  return (
    <div id='speciality' className=' flex flex-col items-center gap-4 py-16 text-gray-800 '>
        <h1 className='text-3xl font-medium'>Find Lectures By Thier Respective Subject</h1>
        <p className='sm:w-1/3 text-center text-sm'>find any teacher by their respective subjuct, I promise it is the rightest place for your study. Register and make a Schedule for your study.</p>
        <div className='flex sm:justify-center gap-4 pt-5 overfow-scroll'>
            {
                subjectData.map((item, key) => (
                    <Link to={`/lecturers/${item.speciality}`} className='flex flex-col items-center text-xs cursor-pointer flexshrink-0 hover:translate-y-[-10px] transition-all duration-500' key= {key}>
                        <img className='w-28 h-13 md:h-17 lg:h-25 rounded-full' src={item.image} alt="" />
                        <p>{item.speciality}</p>
                    </Link>
                ))
            }
        </div>
    </div>
  )
}

export default SpecialityMenu
