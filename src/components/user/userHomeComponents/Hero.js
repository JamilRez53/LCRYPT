import React,{useState,useEffect} from "react"
import Heading from "./Heading"
import "./Hero.css"
import UserQuiz from "../../../pages/User/UserQuiz"
import { Button, Typography } from "@mui/material"
import { HashRouter } from "react-router-dom"
import axios from "axios"
import CountUp from 'react-countup'
const Hero = () => {
  const[topiclength,setTopiclength] = useState(0);
  const fetchTopics = async() =>{
    axios.get("http://localhost:5000/topics/getTopiclength").then((res)=>{
      console.log(res.data);
      setTopiclength(res.data);
      console.log(setTopiclength(res.data));
    })
  }
  useEffect(()=>{
    fetchTopics();
  },[])
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            {/* <Heading subtitle='WELCOME TO LCA' title='The theoretical aspect of Cyber Security practices' /> */}
            <Typography
            sx={{fontSize:"32px"}}
            >
               An overview of theoretical aspects of different CyberSecurity modules are provided here. 
              </Typography>
            {/* <div className='button'>
              <button component ={HashRouter} to="#userquiz" className='primary-btn'>
               VIEW TOPICS 
                <i className='fa fa-long-arrow-alt-right'></i>
                
              </button>
              {/* <button>
                VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
              </button> */}
            {/* </div> */} 
            <div style={{fontSize:"40px",display:"flex"}}>
            
             
            
            <Typography sx={{fontSize:'40px'}}>Lesson Count<br/><CountUp duration={5} end={topiclength.topiclength}/><>+</></Typography>
             
            
             <Typography  sx={{fontSize:'40px',marginLeft:"20px"}}>Week Count<br/><CountUp duration={5} end={13}/><>+</></Typography>
            
             
             <Typography  sx={{fontSize:'40px',marginLeft:"20px"}}>Credit Count<br/><CountUp duration={5} end={3}/><>+</></Typography>
             
            
             
        </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
