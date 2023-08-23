import React, { useState,useEffect,useRef } from 'react'
import Navbar from '../Navbar';
import { TextField,MenuItem, Grid, Box } from '@mui/material';
import { Typography,Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './tutorial.css';
import Header from '../../../pages/User/Header';
import Hero from "./Hero"
import Footer from "./Footer";
import ReactPaginate from 'react-paginate';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 700,
  },
  searchContainer: {
    justifyContent:'center',
    marginLeft: '650px',
    marginTop:'580px',
    position:'relative',
    backgroundColor:"white",
    marginRight:"545px"
  },
  searchInput: {
    
    borderRadius: theme.shape.borderRadius,
  },
  menuItem: {
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
    },
    marginLeft:'650px',
    width:'250px'
  }

}));
const UserTutorials = () => {
  const classes = useStyles();
  const [tutorialname,setTutorialname] = useState("");
  const [tutorial,setTutorial] = useState([]);
  const[limit,setLimit] = useState(3);
  const[pageCount,setPageCount] = useState(1);
  const currentPage = useRef();
  const SearchTutorial = async() =>{
    await axios.get(`http://localhost:5000/topics/searchTopic/${tutorialname}`).then(res=>{
     setTutorial(res.data)
    })
  }
  const fetchTutorial = async()=>{
        await fetch("http://localhost:5000/tutorials/getTutorials",{
                method:"GET",
             }).then((res) => res.json())
             .then((data) => {
               console.log(data, "TutorialsData");
               setTutorial(data.data);
             })
}
const getPaginatedTutorials = async()=>{
  await fetch(`http://localhost:5000/tutorials/paginatedTutorials?page=${currentPage.current}&limit=${limit}`,{
         method:"GET",
      }).then((res) => res.json())
      .then((data) => {
        console.log(data, "TopicsData");
        setPageCount(data.pageCount);
        setTutorial(data.result);
      })
}
const handlePageClick = async(e) =>{
  console.log(e);
  currentPage.current=e.selected+1;
  getPaginatedTutorials();
  
}
useEffect(()=>{
  currentPage.current=1;
  //fetchTutorial();
  getPaginatedTutorials();
},[])
  return (
    <>
    <Header/>
    <Hero/>
    <div className='tutorial-container'>
    <Grid className={classes.searchContainer}>
     <Grid item xs={12}>
     <TextField 
 className={classes.searchInput}
 label="Search"
variant="outlined"
size="small"
 value={tutorialname} onChange={(event)=>{setTutorialname(event.target.value)}}/>
<Button className="search-button" onClick={SearchTutorial}>Search</Button>

 
{tutorial!==null && tutorial.filter(item=>{
   const searchTerm = tutorialname.toLowerCase();
   const full_tutorial = item.name.toLowerCase();
   return searchTerm && full_tutorial.startsWith(searchTerm) && full_tutorial!==searchTerm;
 }).map((item)=>(
  <MenuItem key={item._id} onClick={()=>{setTutorialname(item.name)}} className={classes.menuItem}>
   {item.name}
  </MenuItem>
))}
     </Grid>
    </Grid>
    <div>
    {/* <Typography variant='h3' style={{marginLeft:"150px",maxWidth:"300px",padding:"1px",marginTop:"40px"}} >Week {currentPage.current}</Typography> */}
    {tutorial!==null && tutorial.map((item)=>{
     return(
      
         <div className="card-container">
           
           <div className="card-content">
           <Typography variant='h4' >
        {item.name}
       </Typography>
       {/* <Typography >{item.description}</Typography> */}
           </div>
       
       {/* <button component={Link} to={`/viewDetails/${item._id}`}>View More</button> */}
       <Button component={Link} to={`/tutorialdetail/${item._id}`}>View More</Button>
     </div>
      
    
       )
     })}
     </div>
    </div>
    
     <ReactPaginate
         breakLabel="..."
         nextLabel="next >"
         onPageChange={handlePageClick}
         pageRangeDisplayed={20}
         pageCount={pageCount}
         previousLabel="< previous"
         renderOnZeroPageCount={null}
         marginPagesDisplayed={2}
         containerClassName="pagination justify-content-center"
             pageClassName="page-item"
             pageLinkClassName="page-link"
             previousClassName="page-item"
             previousLinkClassName="page-link"
             nextClassName="page-item"
             nextLinkClassName="page-link"
             activeClassName="active"
       />
     <Footer/>
     </>
  )
   
   
     
    
    
}

export default UserTutorials
