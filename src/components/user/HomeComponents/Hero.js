import React from "react";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../../../assets/hero-img1.png";
import "./Hero.css";
import { Button, Typography } from "@mui/material";

const HeroSection = () => {
  return (
    <section>
      <div style={{display:"flex"}}>
       
          <Col lg="6" md="6">
            <div className="hero__content">
              <Typography variant="h3" sx={{color:"#fe9e0d"}} className="mb-4 hero__title">
              Objectives fulfilled <br/> through this Course
              </Typography>
              <ul style={{marginLeft:"30px"}}>
               <li><Typography sx={{fontSize:"20px"}}className="mb-5">Recognize the foundations of cybersecurity</Typography></li>
               <li><Typography sx={{fontSize:"20px"}}className="mb-5">Recognize typical cyberthreats</Typography></li>
               <li><Typography sx={{fontSize:"20px"}}className="mb-5">Examine the security of web applications.</Typography></li>
               <li><Typography sx={{fontSize:"20px"}}className="mb-5">Use secure coding techniques</Typography></li>
               <li><Typography sx={{fontSize:"20px"}}className="mb-5">Use reputable authentication and authorization procedures</Typography></li>
              </ul>     
            </div>
            {/* <div className="search" style={{width:"400px"}}>
              <input type="text" placeholder="Search" />
              <Button>Search</Button>
            </div> */}
          </Col>

          <Col lg="6" md="6">
            <img style={{width:"500px",height:"500px",marginLeft:"170px"}} src={heroImg} alt="" className=" hero__img" />
          </Col>
      </div>
    </section>
  );
};

export default HeroSection;
