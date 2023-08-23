
import React,{Component,  useEffect,  useState} from 'react'


const UserDetails = () => {
    const[userData,setState]= useState("");

    const fetchData = async() => {
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
           setState(data.data);
           if(data.data==="token expired"){
            alert("Token expired login again");
            window.localStorage.clear();
            window.location.href="./";
           }
           });
        
    }
    useEffect(()=>{
       fetchData();
    },[])
    const logout =() =>{
      window.localStorage.clear();
      window.location.href="./";
    }
  return (
    <div className="auth-wrapper">
        <div className="auth-inner">
          {userData!==null && (<div>
            <h1>{userData.fname}</h1>
           <h1>{userData.email}</h1>
           <br/>
           <button onClick={logout} className="btn btn-primary">
            Logout
           </button>
          </div> )} 
          
    
            
        </div>
    </div>
  )
}

export default UserDetails