import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import Navbar from '../Navbar';
import { Typography } from '@material-ui/core';
import axios from 'axios';
import ReactQuill from 'react-quill';
import "./tutorialdetail.css"
import Footer from './Footer';
const TutorialDetail = () => {
    const {id} = useParams();
    const[tutorial,setTutorial] = useState({name:'',description:'',video:''})
    // const getTutorial = async ()=>{
    //     await axios.get(`http://localhost:5000/tutorials/getSingleTutorial/${id}`).then(res => setTutorial(res.data))
              
    //    }
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
    { tutorial && (
        <div className='tutorials-container' style={{marginTop:"100px",marginBottom:"50px"}}>
          <div style={{marginLeft:"350px"}}>
          <Typography variant='h3'>{tutorial.name}</Typography>
           
            
           <video   preload="auto"
           width="800px"
           height="500px"
           src={`http://localhost:5000/${tutorial.video}`}
           controls>
            </video>
          </div>
             
                
            
             <ReactQuill theme="snow"  modules={{ toolbar: [] }} value={tutorial.description} readOnly={true} />
        </div>
           
    )


    }
    <Footer/>
    </>
    
  )
}

export default TutorialDetail
