import React from "react"
import Heading from "./Heading"
import "./Hero.css"
import { Typography } from "@mui/material"

const Hero = () => {
  return (
    <>
      <section className='hero-tutorials'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='LEARNING CRYPTOGRAPHY AND INFORMATION SECURITY' title='The practical aspect of Cryptographic practices' />
            {/* <Typography sx={{fontSize:"22px"}}>This portion covers the practical aspects of Cryptography and Information Security.The hands on work of CyberSecurity will help the students learn broadly on different aspects of CyberSecurity</Typography> */}
            {/* <div className='button'>
              <button className='primary-btn'>
                GET STARTED NOW 
                <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <button>
                VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div> */}
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
