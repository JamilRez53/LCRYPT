import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import "./QuizMain.css"
import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios';
const QuizResult = (props) => {
  const[week,setWeek] = useState(props.week);
  const[userId,setuserId] = useState(props.userId);
  const[obtainedScore,setObtainedScore] = useState(props.score);
  const[totalScore,setTotalScore] = useState(props.totalScore);
  const[message,setMessage] = useState('');
  const[results,setResult] = useState(false);
  //const[QuizResult,setQuizResult] = useState('');
  const navigate = useNavigate();
  const QuizResult = props.flag? "Passed" : "Failed";
  //     const fetchData = async() =>{
  //     const response = await fetch("http://localhost:5000/result/findResult")
  //     console.log(response.data, "TopicsData");
  //     setResult(response.data.data);
  //     console.log(setResult(response.data.data));
         
  // }
  const PostResult = async(e)=>{
   console.log(e);
   e.preventDefault();
        try {
            let res = await axios.post("http://localhost:5000/result/postResult",{week,userId,obtainedScore,totalScore,QuizResult},{
        method:"POST",
        crossDomain:true,
        headers:{
            "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        },
        body:JSON.stringify({
            week:week,
            userId:userId,
            obtainedScore:obtainedScore,
            totalScore:totalScore,
            QuizResult:QuizResult
        }),
     });
     console.log(res.status);
     if(res.status===404){
      setMessage("You have a already performed the test!");
      //console.log(res.data);
     }
    
      navigate("/quizmain");
      // if(res.status!==200){
      //   return(
      //     <div>
      //       <Typography>
      //         You have given the test once!
      //       </Typography>
      //     </div>
        //  )
       
    //    }
     
    //  )
     
        
        } catch (error) {
          if (error.response && error.response.data.msg) {
            setMessage(error.response.data.msg); // Set the error message from the backend response
          } else {
            setMessage("An error occurred."); // Set a generic error message
          }
        }
    }
    
    // useEffect(()=>{
    //  // console.log(results)
    //   //fetchData();
    // },[]);
  return (

     <>
      <form className="topic-container" style={{marginTop:"100px",marginLeft:"20px",border:"1px solid black",borderRadius:"5px"}} onSubmit={PostResult}>

    
     <div className="mb-3" style={{marginLeft:"80px",marginTop:"20px"}}>
       <div style={{display:"flex"}}>
       <label >Week</label>
             <input
               type="text"
               className="form-control"
               style={{marginLeft:"500px",width:"200px",backgroundColor:"white",border:"none"}}
               value={props.week}
               readOnly={true}
             />
       </div>
             
           </div>
          
           <div className="mb-3" style={{marginLeft:"80px"}}>
           <div style={{display:"flex"}}>
             <label >UserID</label>
             <input
               type="text"
               className="form-control"
               value={props.userId}
               readOnly={true}
               style={{marginLeft:"490px",backgroundColor:"white",width:"200px",border:"none"}}
              // onChange={()=>setuserId(props.userId)}
             />
           </div>
           </div>
          
            <div className="mb-3" style={{marginLeft:"80px"}}>
             <div style={{display:"flex"}}>
             <label>Obtained Score</label>
             <input
               type="text"
               className="form-control"
               value={props.score}
               style={{marginLeft:"430px",backgroundColor:"white",width:"200px",border:"none"}}
               readOnly={true}
              // onChange={()=>setObtainedScore(props.obtainedScore)}
             />
             </div>
             
           </div>
 
             <div  style={{marginLeft:"80px"}}>
               <div style={{display:"flex"}}>
               <label>Total Score</label>
               <input
               type="text"
               className="form-control"
               value={props.totalScore}
               style={{marginLeft:"460px",backgroundColor:"white",width:"200px",border:"none"}}
               readOnly={true}
              // onChange={()=>setTotalScore(props.totalScore)}
             />
               </div>
               </div>
               <div style={{marginLeft:"80px",marginTop:"30px"}} >
                 <div style={{display:"flex"}}>
                 <label>Quiz Result</label>
                 {/* <span style={{ color : `${props.flag ? "#2aff95" : "#ff2a66" }`,marginLeft:"460px" }} className='bold'>{props.flag ? "Passed" : "Failed"}</span> */}
                 <input 
                  style={{ color : `${props.flag ? "#2aff95" : "#ff2a66" }`,marginLeft:"460px",width:"200px",backgroundColor:"white",border:"none" }}
                  className="form-control"
                  value={QuizResult}
                  readOnly={true}
                  />
                 </div>
                
            
           </div>
           <div className="mb-3" style={{marginLeft:"80px"}}> {message && (<Typography variant='h1'>{message}</Typography>)}</div>
           <div className="d-grid" style={{marginLeft:"300px",marginBottom:"30px"}}>
             <button type="submit" className="btn btn-primary" onClick={props.resetAll}>
               Submit
             </button>
           </div>
         
           </form>
     
     
      
      </>
       
   
  )
  }

export default QuizResult