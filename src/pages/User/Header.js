import React, { useState,useEffect } from "react"
import { Link } from "react-router-dom"
import Head from "./Head"
import "./Header.css"
import { Typography } from "@mui/material"
import { Button } from "@material-ui/core"

const Header = () => {
  const [click, setClick] = useState(false)
  const[userData,setData]= useState("");
  const islogged = window.localStorage.getItem("loggedIn");
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
const FetchUserResult = ()=>{

}
const Logout = () =>{
  window.localStorage.clear();
  window.location.href="./"
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
            
            <li style={{display:"flex"}}>
              <Link to='/userHome'><Typography variant="h5">Topic Overview</Typography></Link>
              <Link to='/userTutorials'><Typography sx={{marginLeft:"20px"}} variant="h5">Tutorials</Typography></Link>
            </li>
           
          </ul>
          <div style={{display:"flex"}}>
          <Button style={{background:"#1eb2a6", display:"flex"}} component={Link} to={`/editUser/${userData._id}`}>
           {userData!==null &&(<div className='button'><Typography sx={{color:"white",fontStyle:"bold"}}>{userData.email?.toUpperCase()}</Typography></div>)} 
          </Button>
          {/* <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button> */}
         {islogged?(<Button style={{marginRight:"100px", marginLeft:"30px",background:"#1eb2a6", display:"flex"}} onClick={Logout}>
          <Typography sx={{color:"white",fontStyle:"bold"}}>
            Logout
          </Typography>
           
          </Button>):("")} 
          </div>
          

        </nav>

      </header>
    </>
  )
}

export default Header
