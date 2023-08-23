import React, { useEffect, useState ,useRef,useMemo } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { Typography } from '@mui/material';
import Navbar from '../Navbar';
import "./ViewTopics.css"
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
const ViewTopics = () => {
  const {id} = useParams()
    const[topic,setTopic] = useState({name:'', description:''})
    const getTopic = async ()=>{
        await axios.get(`http://localhost:5000/topics/getSingleTopics/${id}`).then(res => setTopic(res.data))
              
       }
  useEffect(()=>{
    getTopic();
  },[])
//   const modules = {
//   {{ toolbar: ["bold"] }}
// }
	
  return (
    <>
    <Navbar/>
    { topic && (
        <div className='topics-container'>
             <Typography  variant='h3' component='h2' sx={{marginBottom:'20px',backgroundColor:'#adb5bd',opacity:undefined}}> Topic Name: </Typography>
            <Typography sx={{marginBottom:'20px',fontSize:'25px'}}>{topic.name}</Typography>
            <Typography  variant='h3' component='h2' sx={{marginBottom:'20px',backgroundColor:'#adb5bd',opacity:undefined}}> Day: </Typography>
            <Typography sx={{marginBottom:'20px',fontSize:'25px'}}>{topic.day}</Typography>
            <Typography  variant='h3' component='h2' sx={{marginBottom:'20px',backgroundColor:'#adb5bd',opacity:undefined}}> Lesson: </Typography>
            <Typography  sx={{marginBottom:'20px',fontSize:'25px'}}>{topic.lesson}</Typography>
            <Typography variant='h3' sx={{marginBottom:'20px',backgroundColor:'#adb5bd',opacity:undefined}}>Description of Inner Subtopic:</Typography>
            
            <ReactQuill theme="snow"  modules={{ toolbar: [] }} value={topic.description} readOnly={true} />
        </div>

    )


    }
    </>
    
  )
}

export default ViewTopics