import React from 'react'
import { useState } from 'react'
import styles from "./styles.module.css"
const Signup = () => {
  const[fname,setFname] = useState("");
  const[lname,setLname] = useState("");
  const[email,setEmail] = useState("");
  const[password,setPassword] = useState("");
  const[message,setMessage] = useState("");
  const handleInputs=async(e)=>{
    console.log(e);
    e.preventDefault();
    try {
        let res = await fetch("http://localhost:5000/auth/register",{
        method:"POST",
        crossDomain:true,
        headers:{
            "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        },
        body:JSON.stringify({
            fname:fname,
            lname:lname,
            email:email,
            password:password
        }),
     }).then((res) => res.json())
     .then((data) => {
       console.log(data, "userRegister");
       window.location.href="./";
       });
       //let resJson = await res.json();
       if (res.status === 200) {
         setFname("");
         setLname("");
         setEmail("");
         setPassword("");
         setMessage("User created successfully");
       } else {
         setMessage("Some error occured");
       }
    } catch (error) {
        console.log(error);
    }
     e.target.reset();
     
  }

  return (
    <div className={styles.container}>
    <h1 className={styles.heading}>SignUp Form</h1>
  <form className={styles.form_container} >
  <div className={styles.left}>
        <img className={styles.img} src="./images/signup.jpg" alt="login" />
      </div>
      <div className={styles.right}>
        <input
          type="email"
          className={styles.input}
          placeholder="Enter email"
          onChange={(e)=>setEmail(e.target.value)}
        />
         <input
          type="text"
          className={styles.input}
          placeholder="FirstName"
          onChange={(e)=>setFname(e.target.value)}

        />
         <input
          type="text"
          className={styles.input}
          placeholder="LastName"
          onChange={(e)=>setLname(e.target.value)}

        />
        <input
          type="password"
          className={styles.input}
          placeholder="Enter password"
          onChange={(e)=>setPassword(e.target.value)}

        />
        <button onClick={handleInputs} className={styles.btn}>SignUp</button>
        
      </div>
      </form>
   
</div>
     
  )
}

export default Signup