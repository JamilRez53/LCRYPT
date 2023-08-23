import React ,{useEffect, useState}from 'react'
import styles from "./styles.module.css"
import { Link,useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import {useGoogleLogin} from '@react-oauth/google';
import axios from "axios"
import {GoogleLogin} from 'react-google-login'

const UserAuth = () => {
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const[message,setMessage] = useState("");
   
    const handleInputs=async(e)=>{
      console.log(e);
      e.preventDefault();
      try {
          let res = await fetch("http://localhost:5000/auth/login",{
          method:"POST",
          crossDomain:true,
          headers:{
              "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
          },
          body:JSON.stringify({
              email:email,
              password:password
          }),
       }).then((res) => res.json())
       .then((data) => {
         console.log(data, "userLogin");
         if (data.status === "ok") {
            alert("login successful");
            window.localStorage.setItem("token", data.data);
            window.localStorage.setItem("loggedIn", true);
  
            window.location.href = "./userHome";
          }
         });
        

      } catch (error) {
          console.log(error);
      }
    }

// const login = useGoogleLogin({
//   onSuccess: async respose => {
//       try {
//           const res = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
//               headers: {
//                   "Authorization": `Bearer ${respose.access_token}`
//               }
//           })
//           console.log(res.data)
//           if(res.status==="ok"){
//             window.location.href="./User"
//           }

//       } catch (err) {
//           console.log(err)

//       }

//   }
// });
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Log in Form</h1>
    <form className={styles.form_container} >
    <div className={styles.left}>
					<img className={styles.img} src="./images/login.jpg" alt="login" />
				</div>
        <div className={styles.right}>
          <input
            type="email"
            className={styles.input}
            placeholder="Enter email"
            onChange={(e)=>setEmail(e.target.value)}
          />
          <input
            type="password"
            className={styles.input}
            placeholder="Enter password"
            onChange={(e)=>setPassword(e.target.value)}

          />
          <button onClick={handleInputs} className={styles.submit}>Log In</button>
					<p className={styles.text}>or</p>
					<p className={styles.text}>
						New Here ? <Link to="/sign-up">Sing Up</Link>
					</p>
        </div>
        </form>
        {/* <div className="message">{message ? <p>{message}</p> : null}</div> */}
     
  </div>
  )

}
export default UserAuth