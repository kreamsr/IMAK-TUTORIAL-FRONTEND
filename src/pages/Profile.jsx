import React, { useState } from 'react'
import {assets} from '../assets/assets'

const Profile = () => {


  const [userDate, setUserData] = useState({
    name: 'Alsadir Ebrahim',
    image: assets.profile_pic,
    email : 'kreamsr@gmail.com',
    phone: '+251918180038',
    adress: {
      line1:'piazza',
      line2:'shegole'
    },
    gender:'Male',
    dateOfBirth: '2005-01-03',
    class: '9th'

  })
  const [isEdit , setIsEdit] = useState(false)



  return (
    <div className='max-w-lg flex flex-col gap-2 text-sm'>

      <img className='w-36' src={userDate.image} alt="" />

      {
        isEdit
         ? <input className='bg-gray-100 text-3xl font-medium max-w-60 mt-4 px-3 border border-gray-100 rounded-lg outline-none' type="text" value={userDate.name} onChange={(e) => setUserData(prev => ({...prev,name:e.target.value}))}/>
         : <p className='font-medium text-3xl text-neutral-800 mt-4'>{userDate.name}</p>
      }

      <hr className='bg-zinc-400 h-0.25 border-none' />
      <div>
        <p className='text-neutral-500 underline mt-3'>User Information</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
          <p className='font-medium'>Email: </p>
          <p className='text-indigo-400'>{userDate.email}</p>
          <p className='font-medium'>Phone: </p>
          {
            isEdit
            ? <input className='bg-gray-100 px-3 max-w-52 h-7 rounded-lg' type="text" value={userDate.phone} onChange={(e) => setUserData(prev => ({...prev,phone:e.target.value}))}/>
            : <p className='text-indigo-400'>{userDate.phone}</p>
          }
            <p className='font-medium'>Class: </p>
          {
            isEdit
            ? <input className='bg-gray-100 px-3 max-w-52 h-7 rounded-lg' type="text" value={userDate.class} onChange={(e) => setUserData(prev => ({...prev,class:e.target.value}))}/>
            : <p>{userDate.class}</p>
          }
          <p className='font-medium'>Address: </p>
          {
            isEdit
              ? <p>
                  <input className='bg-gray-100 px-3 max-w-52 h-7 rounded-lg ' value={userDate.adress.line1} onChange={(e) => setUserData(prev => ({...prev, adress:{...prev.adress, line1: e.target.value}}))} type="text" />
                  <br />
                  <br />
                  <input className='bg-gray-100 px-3 max-w-52 h-7 rounded-lg' value={userDate.adress.line2} onChange={(e) => setUserData(prev => ({...prev, adress:{...prev.adress, line2: e.target.value}}))} type="text" />
                </p>
              : <p>
                  {userDate.adress.line1} 
                  <br />
                  {userDate.adress.line2}
                </p>
          }
        </div>
      </div>

      <div>
        <p className='text-neutral-500 underline mt-3'>Basic Information</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
          <p className='font-medium'>Gender: </p>
          {
              isEdit
              ? <select className='max-w-20 bg-gray-100 px-3 h-7 rounded-lg' value={userDate.gender} onChange={(e) => setUserData(prev => ({...prev,gender:e.target.value}))}>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              : <p className='text-gray-400'>{userDate.gender}</p>
          }
          <p>Birth Date : </p>
          {
            isEdit
            ? <input className='max-w-28 bg-gray-100 px-3 h-7 rounded-lg' type="date" value={userDate.dateOfBirth} onChange={(e) => setUserData(prev => ({...prev,dateOfBirth:e.target.value}))}/>
            : <p className='text-gray-400'>{userDate.dateOfBirth}</p>
          }

        </div>
      </div>

      <div className='mt-10'>
        {
          isEdit 
           ? <button className='border border-indigo-700 px-8 py-2 rounded-full hover:bg-indigo-700 hover:text-white transition-all duration-300 ' onClick={() => setIsEdit(false)}>Save Information</button>
           : <button className='border border-indigo-700 px-8 py-2 rounded-full hover:bg-indigo-700 hover:text-white transition-all duration-300' onClick={() => setIsEdit(true)}>Edit Information</button>
        }
      </div>
    </div>
  )
}

export default Profile
