import React, { useState,useEffect } from 'react'
import { Button, Typography } from '@mui/material';
import {QuizData} from "../../../Database/Data"
import {Navigate} from 'react-router-dom'
import "./QuizMain.css";
import QuizResult from "./QuizResult";
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Hero from "./Hero"
import Header from "../../../pages/User/Header";
import Footer from "./Footer"
const QuizMain = () => {
  const [syllabus,setSyllabus] = useState("");
  const fetchData = async() =>{
    await fetch("http://localhost:5000/syllabus/getContent",{
            method:"GET",
         }).then((res) => res.json())
         .then((data) => {
           console.log(data, "TopicsData");
           setSyllabus(data.data);
         })
  }
  useEffect(()=>{
    fetchData();
  },[])
  return (
    <>
      <Header/>
      <Hero/>
      
      <div className='quiz-content'>
      {/* style={{marginTop:"650px"}} */}
      <div className="card-container"    >
          <div className="card-content">
            <Typography variant='h4' sx={{marginLeft:"10px"}} >QuizTest Week 1</Typography>
            <Typography sx={{marginLeft:"10px",fontWeight:"bold"}}>Concept and applications of cryptography , Techniques of designing efficient Cryptosystems: Symmetric key encryption-Stream ciphers , Block ciphers.</Typography>
              <Button component={Link} to="/quizweek1/" >Try Out</Button>
          </div>
        </div>
        <div className="card-container">
          <div className="card-content">
            <Typography variant='h4' sx={{marginLeft:"10px"}} >QuizTest Week 2</Typography>
              <Typography sx={{marginLeft:"10px",fontWeight:"bold"}}>Message authentication codes , Hash function , Digital signature.</Typography>
              <Button component={Link} to="/quizweek2/">Try Out</Button>
          </div>
        </div>
        <div className="card-container">
          <div className="card-content">
            <Typography variant='h4' sx={{marginLeft:"10px"}} >QuizTest Week 3</Typography>
             <Typography sx={{marginLeft:"10px",fontWeight:"bold"}}>Asymmetric key encryption - Diffie-Hellman protocol , Trapdoor functions , RSA.</Typography>
              <Button component={Link} to="/quizweek3/">Try Out</Button>
          </div>
        </div>
        <div className="card-container">
          <div className="card-content">
            <Typography variant='h4' sx={{marginLeft:"10px"}} >QuizTest Week 4</Typography>
             <Typography sx={{marginLeft:"10px",fontWeight:"bold"}}>Merkel puzzles , El-Gammal cryptosystems , Linear and differential cryptanalysis.</Typography>
              <Button component={Link} to="/quizweek4/">Try Out</Button>
          </div>
        </div>
        <div className="card-container">
          <div className="card-content">
            <Typography variant='h4' sx={{marginLeft:"10px"}} >QuizTest Week 5</Typography>
             <Typography sx={{marginLeft:"10px",fontWeight:"bold"}}>Mathematics of cryptography , Lightweight cryptographic protocols , Steganography.</Typography>
              <Button component={Link} to="/quizweek5/">Try Out</Button>
          </div>
        </div>
        <div className="card-container">
          <div className="card-content">
            <Typography variant='h4' sx={{marginLeft:"10px"}} >QuizTest Week 6</Typography>
             <Typography sx={{marginLeft:"10px",fontWeight:"bold"}}>Fundamental properties and terminology of information security , System security management, analysis and control , Physical and logical security.</Typography>
              <Button component={Link} to="/quizweek6/">Try Out</Button>
          </div>
        </div>
        <div className="card-container">
          <div className="card-content">
            <Typography variant='h4' sx={{marginLeft:"10px"}} >QuizTest Week 7</Typography>
             <Typography sx={{marginLeft:"10px",fontWeight:"bold"}}>Types of attacks , Database security , Network security threats.</Typography>
              <Button component={Link} to="/quizweek7/">Try Out</Button>
          </div>
        </div>
        <div className="card-container">
          <div className="card-content">
            <Typography variant='h4' sx={{marginLeft:"10px"}} >QuizTest Week 8</Typography>
            <Typography sx={{marginLeft:"10px",fontWeight:"bold"}}>WSN security , Fundamental of Cybersecurity , IoT network and IoT device security.</Typography>
              <Button component={Link} to="/quizweek8/">Try Out</Button>
          </div>
        </div>
        <div className="card-container">
          <div className="card-content">
            <Typography variant='h4' sx={{marginLeft:"10px"}} >QuizTest Week 9</Typography>
             <Typography sx={{marginLeft:"10px",fontWeight:"bold"}}>Blockchain , Secure Cloud computing , Computer abuse.</Typography>
              <Button component={Link} to="/quizweek9/">Try Out</Button>
          </div>
        </div>
        <div className="card-container">
          <div className="card-content">
            <Typography variant='h4' sx={{marginLeft:"10px"}} >QuizTest Week 10</Typography>
            <Typography sx={{marginLeft:"10px",fontWeight:"bold"}}>Legal and Ethical issues.</Typography>
              <Button component={Link} to="/quizweek10/">Try Out</Button>
          </div>
        </div>
        
      
      </div>
      
        <Footer/>
    </>
  )
}

export default QuizMain
