import * as React from 'react';
import {useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Container } from '@mui/material';
import Sidebar from './Sidebar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    marginBottom: '20px',
    marginRight:'80px'
  },
  toolbar:{
    background:"white",
    color:"#007bff",
  }
}));
export default function ButtonAppBar() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const classes = useStyles();
  const[adminData,setAdmin] = useState(" ");
  const[isScrolled,setScrolled] = useState(false)
  const scrollNavbar = () =>{
    if (window.pageYOffset > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
const open = Boolean(anchorEl);
const handleClick = (event) => {
  setAnchorEl(event.currentTarget);
};
const handleClose = () => {
  setAnchorEl(null);
};
  const navigate=useNavigate();
  const fetchData = async() => {
    await fetch("http://localhost:5000/adminInfo/adminData",{
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
      console.log(data, "adminData");
      setAdmin(data.data);
      if(data.data==="token expired"){
       alert("Token expired login again");
       window.localStorage.clear();
      // window.location.href="./admin";
      navigate("/admin");
      }
      });
   
}
useEffect(()=>{
  fetchData();
  scrollNavbar();
},[])
const logout =() =>{
 window.localStorage.clear();
 window.location.href="./";
}
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{marginRight:"5px",marginBottom:"30px" }}  className={isScrolled? classes.appBar : ''}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer("left", true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           Instructor Dashboard
          </Typography>
          {
          adminData!=="null" &&(
            <>
             <Container>
            {/* <Typography  variant="h6" component="div" sx={{ flexGrow: 1 ,marginLeft:'1000px' }}>{userData.fname}</Typography> */}
            <Button sx={{marginLeft:'900px'}}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {adminData.email}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        
        {/* <MenuItem onClick={handleClose}>My account</MenuItem> */}
        <MenuItem onClick={logout}>Logout</MenuItem>
      </Menu>

          </Container>
         
            </>
         
          )}
        </Toolbar>
      </AppBar>
      <Sidebar state={state} setState={useState} toggleDrawer={toggleDrawer}></Sidebar>
    </Box>
  );
}
