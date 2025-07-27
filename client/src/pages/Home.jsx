import React from 'react'
import Header from '../components/Header'
import Steps from '../components/Steps'
import BGSlider from '../components/BGSlider'
import Testimonials from '../components/Testimonials'

const Home = () => {
  return (
    <div>
        <Header/>
        <Steps/>
        <BGSlider/>
        <Testimonials/>
    </div>
  )
}

export default Home