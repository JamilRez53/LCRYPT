import React, { useEffect, useState ,useRef,useMemo } from 'react'
import { useParams } from 'react-router-dom'
//import axios from 'axios';
//import { Typography } from '@mui/material';
// import Navbar from '../Navbar';
// import "./ViewTopics.css"
import "./User.css";
import { Button, Typography,TextField,MenuItem, Grid, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ViewTopics = ({props}) => {
  const {week} = useParams()
    const[topic,setTopic] = useState([])
    const fetchTopics = async() =>{
      await fetch(`http://localhost:5000/topics/getSingleWeek/${week}`,{
              method:"GET",
           }).then((res) => res.json())
           .then((data) => {
             console.log(data, "TopicsData");
             setTopic(data.data);
           })
    }
  useEffect(()=>{
    fetchTopics();
  },[])
//   const modules = {
//   {{ toolbar: ["bold"] }}
// }
	
  return (
    <>
    <div className="topic-container">
      <Typography variant='h2' style={{marginLeft:"150px",maxWidth:"300px",padding:"1px",color:"red",marginTop:"40px"}}>Week:{week}</Typography>
    { topic!==null && topic.map((item)=>(
        <div className="card-container" key={item.name}>
          <div className="card-content">
            <div style={{display:"flex"}}>
              <Typography variant='h5' sx={{marginLeft:"10px",marginRight:"2px",color:"#1eb2a6"}}>Day:</Typography>
              <Typography variant='h5' sx={{marginLeft:"2px",color:"#1eb2a6"}}>{item.day}</Typography>
            </div>
          
           
           <Typography  sx={{fontSize:"20px",marginLeft:"10px",color:"#1eb2a6"}}>{item.name}</Typography>
           
            <Button sx={{marginLeft:"10px",marginBottom:"10px",background:"#1eb2a6",color:"white"}} component={Link} to={`/viewDetails/${item._id}`}>View More</Button>
          </div>
            
        </div>
    ))}
    <div className="card-container">
          <div className="card-content">
            <Typography variant='h4' sx={{marginLeft:"10px",color:"#1eb2a6"}} >Weekly Test</Typography>
            <Typography sx={{marginLeft:"10px",color:"#1eb2a6"}}>Test Your Acquired Knowledge</Typography>
              <Button sx={{marginLeft:"10px",marginBottom:"10px",background:"#1eb2a6",color:"white"}} component={Link} to="/quizmain">View More</Button>
          </div>
        </div>
    </div>
   
    </>
    
  )
}

export default ViewTopics