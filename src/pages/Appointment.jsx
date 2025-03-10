import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';
import Related from '../components/Related';

const Appointment = () => {

  const {techId} = useParams();
  const {lecturers,currency} = useContext(AppContext);
  const [lecInfo, setLecInfo] = useState(null);

  const [availableTime, setAvailableTime] = useState([]);
  const [lectureTime,setLectureTime] = useState('');
  const [timeIndex, setTimeIndex] = useState(0);
  const days = ['MON','TUE','WED','THU','FRI','SAT','SUN',]
  
  

  const lecturerInfo = async () => {
     const data = lecturers.find((item) => item._id === techId)
     setLecInfo(data);
   
     
  }



  const getLectureTime = async () => {
    setAvailableTime([]);


    let today = new Date() //current date 
    for (let i=0 ; i<7; i++ ){

      // date with index
      let currentDate = new Date(today)
      currentDate.setDate(today.getDate() + i)

      let endTime = new Date()
      endTime.setDate(today.getDate()+i)
      endTime.setHours(21,0,0,0)

      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() +1 : 10)
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
      } else {
        currentDate.setHours(10)
        currentDate.setMinutes(0)
      }
      let alltimes = [];
      while (currentDate < endTime) {
        

        let timer = currentDate.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})

        alltimes.push({
          datetime: new Date(currentDate),
           time: timer      
        })

        currentDate.setHours(currentDate.getHours() + 2)


      }
      setAvailableTime(prev => ([...prev, alltimes]))
    }


  }

  useEffect(() => {
    lecturerInfo();
  },[lecturers,techId])


  useEffect(() =>{
    getLectureTime();
  },[lecInfo])


  // useEffect(() => {
  //   console.log(availableTime); 
  // },[availableTime])

  // useEffect(() => {
  //   related();
  // },[lecInfo])

  return lecInfo && (
    <div>
      {/* doctor detail */}
       <div className='flex flex-col sm:flex-row gap-4'>
            <div>
              <img className='bg-ingigo-700 w-full sm:max-w-82 rounded-lg' src={lecInfo.image} alt="" />
            </div>
            <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[80px] sm:mt-0'>
              <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>{lecInfo.name} <img className='w-5' src={assets.verified_icon} alt="" /></p>
              <div className='flex items-center gap-2 text-sm mt-1'>
                <p>{lecInfo.degree}-{lecInfo.subject}</p>
                <button className='py-0.5 px-2 border text-xs rounded-full'>{lecInfo.experience}</button>
              </div>
              <div>
                <p className='flex items-center gap-1 text-sm font-medium text-gray-900mt-3'>About <img className='w-4' src={assets.info_icon} alt="" /></p>
                <p className='text-sm text-gray500 max-w-[700px] mt-1'>{lecInfo.about}</p>
              </div>

              <p className='text-gray-500 font-medium mt-4'>Appointment Fee: <span className='text-gray-600'>{currency}{lecInfo.fees}</span></p>
            </div>    
       </div>

       <div className="sm:ml-82 sm:pl-4 mt-4 font-medium text-gray-700">
        <p>Booking Times</p>
        <div className="flex gap-3 items-center w-full overflow-x-scroll mt-4">
          {
            availableTime.length && availableTime.map((item, key) => (
              <div onClick={() => setTimeIndex(key)} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${timeIndex === key ? 'bg-indigo-700 text-white' : 'border border-gray-200 hover:bg-gray-100'}`} key={key}>
                <p>{item[0] && days[item[0].datetime.getDay()]}</p>
                <p>{item[0] && item[0].datetime.getDate()}</p>
              </div>
            ))
          }
        </div>

        <div className='flex items-center gap-3 w-full overflow-x-scroll mt-4'>
          {
            availableTime.length && availableTime[timeIndex].map((item, key) => (
            <p onClick={() => setLectureTime(item.time)} className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === lectureTime ? 'bg-indigo-700 text-white ' : 'border border-gray-300 hover:bg-gray-100' }`} key={key}>
                {item.time.toLowerCase()}
              </p>
            ))
          }
        </div>
        <button className='text-sm font-light bg-indigo-700 text-white px-14 py-3 cursor-pointer hover:bg-indigo-600 rounded-full mt-4 '>Register For Tutorial</button>
       </div>

       <Related lecId = {techId} subject= {lecInfo.subject}/>
    </div>
  )
}

export default Appointment
