import React from "react"
import Heading from "./Heading"
import "./Hero.css"
import { Typography } from "@mui/material"

const Hero = () => {
  return (
    <>
      <section className='hero-quiz'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='LEARNING CRYPTOGRAPHY AND INFORMATION SECURITY' title='The Quiz portion for Cryptography Knowledge practice' />
            {/* <Typography sx={{fontSize:"24px"}}>Test your acquired Knowledge by passing some simple quiz tests set for you.</Typography> */}
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
