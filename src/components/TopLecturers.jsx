import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext';

const TopLecturers = () => {

  const navigate = useNavigate();
  const {lecturers} = useContext(AppContext);

  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
      <h1 className='text-3xl font-medium'>Top Lecturers To Make a Schedule With</h1>
      <p className='sm:w-1/3 text-center text-sm'>here are the best lecturers for your support to your study</p>
      <div className='w-full grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4 pt-5 gap-y-6  px-3 sm:px-0'>
          {
            lecturers.slice(0,15).map((item,key) => (
              <div onClick={() => {navigate(`/appointment/${item._id}`); scrollTo(0,0)}} key={key} className='border bg-indigo-50 border-indigo-300 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'>
                <img className='bg-indigo-100 w-74 h-80' src={item.image} alt="" />
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
      <button onClick={() => { navigate('/lecturers'); scrollTo(0,0)}} className='bg-indigo-50 text-gray-600 px-12 py-3 rounded-full mt-10 hover:bg-indigo-100 transition-all duration-400'>More</button>
    </div>
  )
}

export default TopLecturers
