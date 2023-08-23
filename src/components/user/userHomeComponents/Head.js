import { Typography } from "@mui/material"
import React from "react"

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container flexSB'>
          <div className='logo'>
            <Typography style={{fontSize:"24px",fontWeight:"bold"}}>LEARNING CRYPTOGRAPHY AND INFORMATION SECURITY FOR ALL</Typography>
            <Typography style={{fontSize:"20px"}}>E-LEARNING PLATFORM FOR CRYPTOGRAPHIC AND CYBERSECURITY MODULES</Typography>
          </div>

          <div className='social'>
            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-instagram icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-youtube icon'></i>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
