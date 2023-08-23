import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { Typography } from '@mui/material';
import Navbar from '../Navbar';

const ViewTutorials = () => {
    const {id} = useParams();
    const[tutorial,setTutorial] = useState({name:'',description:'',video:''})
    const getTutorial = async ()=>{
      await fetch(`http://localhost:5000/tutorials/getSingleTutorial/${id}`,{
        method:"GET",
     }).then((res) => res.json())
     .then((data) => {
      const { name,description,video } = data.data;
       console.log(data, "TutorialsData");
       setTutorial({...tutorial,name,description,video});
       //setVideo(video);
     })
              
       }
  useEffect(()=>{
    getTutorial();
  },[])
  return (
    <>
    <Navbar/>
    { tutorial!==null && (
        <div className='topic-container'>
             <Typography  variant='h3' component='h2' sx={{marginBottom:'20px',backgroundColor:'#adb5bd',opacity:undefined}}> Tutorial Name: </Typography>
            <Typography sx={{marginBottom:'20px',fontSize:'25px'}}>{tutorial.name}</Typography>
            <Typography variant='h3' sx={{marginBottom:'20px',backgroundColor:'#adb5bd',opacity:undefined}}>Description of the tutorial:</Typography>
            <Typography sx={{marginBottom:'20px',fontSize:'25px'}}>{tutorial.description}</Typography>
            <Typography variant='h3' sx={{marginBottom:'20px',backgroundColor:'#adb5bd',opacity:undefined}}>Video:</Typography>
           
                 <video   preload="auto"
                 width="400"
                 height="240"
                 marginleft="50px"
                 src={`http://localhost:5000/${tutorial.video}`}
                  controls>
                   
                 </video>

        </div>
           
    )


    }
    </>
    
  )
}

export default ViewTutorials
