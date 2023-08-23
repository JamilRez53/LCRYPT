import { Button, List, ListItem, Typography } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import "./Quiz.css"
import axios from 'axios'
const Quiz = () => {
//     const [user,setUser] = useState("");
//     const dispatch = useDispatch();
//     const inputRef = useRef(null);
//     const fetchUser = async() =>{
//         try {
//             await fetch("http://localhost:5000/userDetails/userData",{
//                 method:"POST",
//                 crossDomain:true,
//                 headers:{
//                     "Content-Type": "application/json",
//                 Accept: "application/json",
//                 "Access-Control-Allow-Origin": "*",
//                 },
//                 body:JSON.stringify({
//                     token: window.localStorage.getItem("token")
//                 }),
//              }).then((res) => res.json())
//              .then((data) => {
//                console.log(data, "userData");
//                setUser(data.data);
//                inputRef.current=data.data;
//                if(data.data==="token expired"){
//                 alert("Token expired login again");
//                 window.localStorage.clear();
//                 window.location.href="./";
//                }
//                });
              
//         } catch (error) {
//             console.log(error)
//         }
      
//     }
//     useEffect(()=>{
//         fetchUser()
//     },[])
//     function startQuiz(){
//         if(user.email){
//             dispatch(setUserId(user.email))
//         }
//     }
  return (
    <div className='container'>
   <Typography variant='h2'>Self-Assesment</Typography>

   <ol>
        <li><Typography>You will be asked 10 questions one after another.</Typography></li>
        <li><Typography>10 points is awarded for the correct answer.</Typography></li>
        <li><Typography>Each question has three options. You can choose only one options.</Typography></li>
        <li><Typography>You can review and change answers before the quiz finish.</Typography></li>
        <li><Typography>The result will be declared at the end of the quiz.</Typography></li>
    </ol>
     {/* ref={inputRef} */}
    {/* <form id="form">
        {user!==null && (
          <input value={user.email} className="userid" type="text"   readOnly />
        )}
        
    </form> */}

    <div className='start'>
            <Button component={Link} to="/quizmain" >Start Quiz</Button>
        </div>

</div>
  )
}

export default Quiz
