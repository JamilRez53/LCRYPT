import React ,{ useState,useEffect } from "react"
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Container, Tabs,Tab, useMediaQuery,useTheme, Grid } from '@mui/material';
import Sidebar from './Sidebar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from "react-router-dom";
import Drawer from "./Drawer";
//import { useTheme } from "@emotion/react";
import DrawerComp from "./Drawer";
import Head from "../../pages/User/Head";
const useStyles = makeStyles((theme) => ({
  appBar: {
   // zIndex: theme.zIndex.drawer + 1,
    marginBottom: '20px',
    marginLeft: '30px',
    width:"1000px"

  },
  toolbar:{
    backgroundColor:"white",
    color:"#007bff",
    marginLeft:"20px"
  }
}));
const Navbar = () => {
        // const [state, setState] = React.useState({
        //   top: false,
        //   left: false,
        //   bottom: false,
        //   right: false,
        // });
      
        // const toggleDrawer = (anchor, open) => (event) => {
        //   if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        //     return;
        //   }
      
        //   setState({ ...state, [anchor]: open });
        // };
        const classes=useStyles();
        const theme = useTheme();
        const isMatch = useMediaQuery(theme.breakpoints.down("md"))
    const[userData,setData]= useState("");
    // const scrollNavbar = () =>{
    //   if (window.pageYOffset > 0) {
    //     setScrolled(true);
    //   } else {
    //     setScrolled(false);
    //   }
    // };
    const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
    

    
  
  const [value, setValue] = useState();
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
    const logout =() =>{
      window.localStorage.clear();
      window.location.href="./";
    }
    const Profile=()=>{
     window.location.href="./profile"
    }
  return (
    
        <Box  sx={{ flexGrow: 1 }}>
         
      <AppBar sx={{width:'1550px',marginLeft:'20px',marginRight:'2px'}} className={classes.appBar }>
        <Toolbar className={classes.toolbar}>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           CourseMaterials
          </Typography>
          {isMatch? (
            <>
               <DrawerComp/>
            </>
          
           ):(
            < >
            <div style={{marginLeft:"10px",display:"flex"}}>
            <Button component={Link} to="/userTopics" >Topics</Button>
              {/* <Button component={Link} to="/quiz" >Quiz</Button> */}
              <Button component={Link} to="/userTutorials" >Tutorials</Button>
              {/* <Button component={Link} to="/queries">Quora</Button> */}
            </div>
           
            </>
           )}  
            
            
          
        
          {
          userData!=="null" &&(
            <>
            <Grid>
            <Container>
              <Grid item xs={6}>

              
            {/* <Typography  variant="h6" component="div" sx={{ flexGrow: 1 ,marginLeft:'1000px' }}>{userData.fname}</Typography> */}
            <Button sx={{marginLeft:'300px'}}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {userData.email}
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
        <MenuItem onClick={Profile}>Profile</MenuItem>
        {/* <MenuItem onClick={handleClose}>My account</MenuItem> */}
        <MenuItem onClick={logout}>Logout</MenuItem>
      </Menu>
      </Grid>
          </Container>
         
            </Grid>
             
         
            </>
         
          )}
        </Toolbar>
      </AppBar>
      {/* <Sidebar state={state} setState={useState} toggleDrawer={toggleDrawer}></Sidebar> */}
    </Box>
   
  )
}

export default Navbar
