import React from "react"
import Heading from "./Heading"
import "./Hero.css"
import UserQuiz from "./UserQuiz"
import { Button, Typography } from "@mui/material"
import { HashRouter } from "react-router-dom"
const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='LEARNING CRYPTOGRAPHY AND INFORMATION SECURITY' title='The theoretical aspect of Cryptography practices' />
            {/* <Typography
            sx={{fontSize:"24px"}}
            >
              This portion covers all the theoretical aspects of different CyberSecurity modules. So hop on and widen your knowledge on the modules of CyberSecurity
              </Typography> */}
            {/* <div className='button'>
              <button component ={HashRouter} to="#userquiz" className='primary-btn'>
               VIEW TOPICS 
                <i className='fa fa-long-arrow-alt-right'></i>
                
              </button>
              {/* <button>
                VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
              </button> */}
            {/* </div> */} 
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
