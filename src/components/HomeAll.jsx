import React from 'react'
import NavBar from './NavBar'
import HomeSlider from './HomeSlider'
import TopStudents from './TopStudents'
import Reviews from './Reviews'
import Footer from './Footer'
import Classes from './Classes'

function HomeAll() {
  return (
    <>
    
     <HomeSlider/>
     <TopStudents/>
     <Reviews/>
     <Footer/>
    
    </>
  )
}

export default HomeAll