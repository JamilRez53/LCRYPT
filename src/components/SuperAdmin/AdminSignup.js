import React from 'react'
import { useState } from 'react'
import Admin from "../../../src/assets/Admin-1.png"
const AdminReg = () => {
  
  const[email,setEmail] = useState("");
  const[password,setPassword] = useState("");
  const[message,setMessage] = useState("");
  const [secretKey, setSecretKey] = useState("");
  const handleInputs=async(e)=>{
    console.log(e);
    if(secretKey!=="CUETCSE"){
        alert("Invalid Admin");
        e.preventDefault();
    }
    else{
        e.preventDefault();
        try {
            let res = await fetch("http://localhost:5000/superAuth/register",{
            method:"POST",
            crossDomain:true,
            headers:{
                "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
            },
            body:JSON.stringify({
                secretKey: secretKey,
                email:email,
                password:password
            }),
         }).then((res) => res.json())
         .then((data) => {
           console.log(data, "AdminRegister");
           window.location.href="./adminlogin"
           });
           //let resJson = await res.json();
          //  if (res.status === 200) {
            
          //    setEmail("");
          //    setPassword("");
          //    setMessage("Admin created successfully");
             
          //  } else {
          //    setMessage("Some error occured");
          //  }
        } catch (error) {
            console.log(error);
        }
    }
    
     
     
  }

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={handleInputs}>
        <div>
          <img src={Admin} style={{width:"200px", marginLeft:"60px"}}/>
        </div>
          <h3>Admin Sign Up</h3>

          <div className="mb-3">
            <label>Secret Key</label>
            <input
                type="text"
                className="form-control"
                placeholder="Secret Key"
                onChange={(e) => setSecretKey(e.target.value)}
              />
          </div>

          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </div>
          <div className="message">{message ? <p>{message}</p> : null}</div>
          <p className="forgot-password text-right">
            Already registered <a href="/adminlogin">sign in?</a>
          </p>
        </form>
      </div>
    </div>
  )
}

export default AdminReg