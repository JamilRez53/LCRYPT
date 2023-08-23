import React, { useRef } from "react";
//import { Container } from "reactstrap";
import "./header.css";
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import { Button } from "@mui/material";
import {Typography} from "@mui/material";
const navLinks = [
  {
    display: "Instructor Login",
    url: "/instructorlogin",
  },
  {
    display: "Student Login",
    url: "/login",
  },
  {
    display: "Admin Login",
    url: "/adminlogin",
  }
];

const Header = () => {
  const menuRef = useRef();

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  return (
    <header className="header">
      <div>
        <div className="navigation d-flex align-items-center justify-content-between">
          <div className="logo">
            <Typography variant="h4" sx={{color:"#1eb2a6"}}>
              <LocalLibraryIcon sx={{color:"#1eb2a6"}}></LocalLibraryIcon> Learning Information Security for all
            </Typography>
          </div>

          <div className="nav d-flex align-items-center gap-5">
            <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
              <ul className="nav__list">
                {navLinks.map((item, index) => (
                  <li key={index} className="nav__item">
                   <Typography variant="h4" sx={{color:"#1eb2a6"}}><a href={item.url}>{item.display}</a></Typography> 
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mobile__menu">
            <span>
              <i class="ri-menu-line" onClick={menuToggle}></i>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
