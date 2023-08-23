import React from "react";
import BannerBackground from "../../../assets/home-banner-background.png";
import BannerImage from "../../../assets/Cyber.jpg";
import Navbar from "./HomeNav"
import { FiArrowRight } from "react-icons/fi";

const Contents = () => {
  return (
    <div className="home-container">
     
      <div className="home-banner-container">
        {/* <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div> */}
        <div className="home-text-section">
          <h1 className="primary-heading">
            Your quest for cyberSecurity knowledge is to be fulfilled here.
          </h1>
          <p className="primary-text">
            Here u will get all the basic knowledge on cyberSecurity contents along with other aspects such aspects
            threats pertaining to cyberSecurity as well as several practical works on cyberSecurity.
          </p>
          {/* <button className="secondary-button">
            Order Now <FiArrowRight />{" "}
          </button> */}
        </div>
        <div className="home-image-section">
          <img  width="500px" src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Contents
