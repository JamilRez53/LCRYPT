import React, { useState,useEffect } from 'react'
import { Button, Typography } from '@mui/material';
import {QuizData} from "../../../Database/Data1"
import {Navigate} from 'react-router-dom'
import "./QuizMain.css";
import QuizResult from "./QuizResult";
import axios from 'axios';
const Quiz2 = () => {
    const[user,setUser] = useState("");
    const[currentQuestion,setCurrentQuestion] = useState(0);
    const[score,setScore] = useState(0);
     const[clickedOption,setClickedOption] = useState(0);  
     const[showResult,setShowResult] = useState(false);
    const[quizData,setQuizData] = useState([]);
    const [week,setWeek] = useState("week2");
    const fetchUser = async() =>{
        try {
            await fetch("http://localhost:5000/userDetails/userData",{
                method:"POST",
                crossDomain:true,
                headers:{
                    "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
                },
                body:JSON.stringify({
                    token: window.localStorage.getItem("token")
                }),
             }).then((res) => res.json())
             .then((data) => {
               console.log(data, "userData");
               setUser(data.data);
              // inputRef.current=data.data;
               if(data.data==="token expired"){
                alert("Token expired login again");
                window.localStorage.clear();
                window.location.href="./";
               }
               });
              
        } catch (error) {
            console.log(error)
        }
      
    }
    useEffect(()=>{
        fetchUser()
    },[])
    const onPrev = () =>{
        // console.log("On Prev");
         if(QuizData.length>0){
            setCurrentQuestion(currentQuestion-1);
            
         }
     }
     const onNext = () =>{
        // console.log("On next");
        updateScore();
         if(currentQuestion<QuizData.length-1){
             setCurrentQuestion(currentQuestion+1);
             setClickedOption(0);
         }
         else{
                setShowResult(true);
         }
     }
 
 
 const updateScore =()=>{
    if(clickedOption===QuizData[currentQuestion].answer){
     setScore(score+1);
     console.log(score)
    }
 }
 const resetAll =()=>{
     setShowResult(false);
     setCurrentQuestion(0);
     setClickedOption(0);
     setScore(0);
 }
 const obtainedScore = score*10;
 const totalScore = QuizData.length*10;
 const flag = ((totalScore*50/100)<obtainedScore)
  return (
    <div className='container'>
    <Typography variant='h2' sx={{marginLeft:"250px"}}>Quiz Test</Typography>

    {/* display questions */}
    {/* <Questionset
    onChecked={onChecked}
    /> */}
    {showResult?
    (<QuizResult week={week} userId={user.email} score={obtainedScore} totalScore={totalScore} flag={flag} tryAgain={resetAll}/>):
    (    <>
          <div className='question'>
     <Typography id='question-number'>{currentQuestion+1}.</Typography>
    {  <Typography>{QuizData[currentQuestion].question}</Typography>}
    </div>
    <div className='option-container'>
     {QuizData[currentQuestion].options.map((option,index)=>{
        return(
            <button sx={{color:"black"}} key={index} className={`option-btn ${
                        clickedOption == index+1?"checked":null
                    }`}
            onClick={()=>setClickedOption(index+1)}
            >
                {option}
            </button>
        )
     })}
    </div>
    <div className='grid'>
        { currentQuestion > 0 ? <Button onClick={onPrev}>Prev</Button> : <div></div>}
        {/* onClick={onPrev} onClick={onNext}*/}
        {/* <Button >Prev</Button> */}
        <Button onClick={onNext}>Next</Button>
    </div>
         </>
      
    )}
    
</div>
  )
}

export default Quiz2