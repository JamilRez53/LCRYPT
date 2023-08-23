import React from 'react'
import "./Home.css"
import Footer from '../components/user/HomeComponents/Footer'
import Contents from '../components/user/HomeComponents/Contents'
import Hero from '../components/user/HomeComponents/Hero'
import Navbar from '../components/user/HomeComponents/HomeNav'
// import Testimonial from '../components/user/HomeComponents/Testimonial'
import About from '../components/user/HomeComponents/About'
import Testimonials from '../components/user/HomeComponents/Testimonial'
const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      {/* <Contents/> */}
      {/* <Testimonials/> */}
      <About/>
      <Footer/>
    </div>
  )
}

export default Home
