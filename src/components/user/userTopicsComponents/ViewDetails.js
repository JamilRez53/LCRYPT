import React, { useEffect, useState ,useRef,useMemo } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Typography } from '@mui/material';
import Navbar from '../Navbar';
import Header from '../../../pages/User/Header';
import "./ViewDetails.css"
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
const ViewDetails = () => {
  const {id} = useParams();
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
  <div className='background'>
  <Header/>
  { topic && (
      <div className='topics-container' style={{background:"white"}}>
           
          <Typography variant='h2' sx={{marginLeft:"80px"}}>{topic.name}</Typography>
          
          <ReactQuill theme="snow" style={{marginLeft:"80px",marginBottom:"50px",marginRight:"50px"}}  modules={{ toolbar: [] }} value={topic.description} readOnly={true} />
      </div>

  )


  }
  </div>
  
  </>
  
)
}

export default ViewDetails
