import React from 'react'
import Header from '../components/Header'
import SpecialityMenu from '../components/SpecialityMenu'
import TopLecturers from '../components/TopLecturers'
import Banner from '../components/Banner'


const Home = () => {
  return (
    <div>
      <Header />
      <SpecialityMenu/>
      <TopLecturers/>
      <Banner/>
    </div>
  )
}

export default Home
