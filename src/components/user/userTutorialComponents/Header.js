import React, { useState,useEffect } from "react"
import { Link } from "react-router-dom"
import Head from "./Head"
import "./Header.css"
import { Typography } from "@material-ui/core"

const Header = () => {
  const [click, setClick] = useState(false)
  const[userData,setData]= useState("");
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
      setData(data.data);
      if(data.data==="token expired"){
       alert("Token expired login again");
       window.localStorage.clear();
       window.location.href="./";
      }
      });
   
}
useEffect(()=>{
  fetchData();
 //  scrollNavbar();
 //  window.addEventListener('scroll', scrollNavbar);
 //  return () => {
 //   window.removeEventListener('scroll', scrollNavbar);
 // };
},[])
  return (
    <>
      <Head />
      <header>
        <nav className='flexSB' style={{marginLeft:"150px"}}>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            
            <li>
              <Link to='/userTopics'><Typography variant="h3">Topics</Typography></Link>
            </li>
            <li>
              <Link to='/usetTutorials'>Tutorials</Link>
            </li>
            <li>
              <Link to='/quizmain'>Quiz</Link>
            </li>
          </ul>
          <div className='start'>
           {userData!==null &&(<div className='button'>{userData.email}</div>)} 
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header
