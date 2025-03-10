import React, { useContext, useEffect, useState } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import { AppContext } from '../context/AppContext';
const Lecturers = () => {

  const {subject} = useParams();
  const {lecturers} = useContext(AppContext);
  const [filter, setFilter] = useState([]);
  const navigate = useNavigate();
  
  const Filter = () => {
      if (subject) {
        setFilter( lecturers.filter((item) => item.subject === subject ))
      } else {
        setFilter(lecturers)
      }
  }

  useEffect(() => {
    Filter();
  },[subject,lecturers])

  return (
    <div>
        <p className='text-gray-600'>Find Lecturers With Thier Respective Subject</p>
        <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
          <div className='flex flex-col gap-4 text-sm text-gray-600 pt-5'>
            <p onClick={() => subject === 'Quran' ? navigate('/lecturers') : navigate('/lecturers/Quran')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16  border border-gray-300 rounded transition-all cursor-pointer duration-500] ${subject === 'Quran'? 'bg-indigo-100 text-black' : ""}`}>Quran</p>
            <p onClick={() => subject === 'Terbia' ? navigate('/lecturers') : navigate('/lecturers/Terbia')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer duration-500] ${subject === 'Terbia'? 'bg-indigo-100 text-black' : ""}`}>Terbia</p>
            <p onClick={() => subject === 'Biology' ? navigate('/lecturers') : navigate('/lecturers/Biology')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer duration-500] ${subject === 'Biology'? 'bg-indigo-100 text-black' : ""}`}>Biology</p>
            <p onClick={() => subject === 'Logic' ? navigate('/lecturers') : navigate('/lecturers/Logic')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer duration-500] ${subject === 'Logic'? 'bg-indigo-100 text-black' : ""}`}>Logic</p>
            <p onClick={() => subject === 'Chemistry' ? navigate('/lecturers') : navigate('/lecturers/Chemistry')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer duration-500] ${subject === 'Chemistry'? 'bg-indigo-100 text-black' : ""}`}>Chemistry</p>
            <p onClick={() => subject === 'Mathematics' ? navigate('/lecturers') : navigate('/lecturers/Mathematics')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer duration-500] ${subject === 'Mathematics'? 'bg-indigo-100 text-black' : ""}`}>Mathematics</p>
            <p onClick={() => subject === 'Physics' ? navigate('/lecturers') : navigate('/lecturers/Physics')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer duration-500] ${subject === 'Physics'? 'bg-indigo-100 text-black' : ""}`}>Physics</p>
            <p onClick={() => subject === 'English' ? navigate('/lecturers') : navigate('/lecturers/English')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer duration-500] ${subject === 'English'? 'bg-indigo-100 text-black' : ""}`}>English</p>
          </div>
          <div className='w-full grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4 pt-5 gap-y-6  px-3 sm:px-0'>
            {
              filter.map((item,key) => (
                <div onClick={() => navigate(`/appointment/${item._id}`)} key={key} className='border bg-indigo-50 border-indigo-300 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'>
                  <img className='bg-indigo-100  w-74 h-80' src={item.image} alt="" />
                  <div className='p-4'>
                    <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                      <p className='w-2 h-2 bg-green-500 rounded full'></p><p>Available</p>
                    </div>
                    <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                    <p className='text-gray-600 text-sm'>{item.subject}</p>
                  </div>
                </div> 
              ))
            }
          </div>
        </div>
    </div>
  )
}

export default Lecturers
