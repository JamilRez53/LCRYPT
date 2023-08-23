import React, { useState ,useEffect,useRef} from 'react'
import Navbar from '../../components/user/Navbar'
import { makeStyles } from '@material-ui/core/styles';
import "./User.css";
import { Button, Typography,TextField,MenuItem, Grid, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';

import ReactPaginate from 'react-paginate';
const useStyles = makeStyles((theme) => ({
  // table: {
  //   minWidth: 700,
  // },
  searchContainer: {
    justifyContent:'center',
    marginBottom: '20px',
    marginLeft: '650px',
    marginTop:'20px',
    position:'relative',
   backgroundColor:"white"
  },
  searchInput: {
    marginRight:"200px",
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
const User = () => {
  const classes = useStyles();
  const [topicname,setTopicname] = useState("");
  const[weekCount,setWeekCount] = useState(0);
  const[limit,setLimit] = useState(3);
  const[pageCount,setPageCount] = useState(1);
  const currentPage = useRef();
  const [topic,setTopic] = useState([]);
  const SearchTopic = async() =>{
    await axios.get(`http://localhost:5000/topics/searchTopic/${topicname}`).then(res=>{
     setTopic(res.data)
    })
  }
  // const fetchTopic = async()=>{
  //         await fetch("http://localhost:5000/topics/getTopics",{
  //                 method:"GET",
  //              }).then((res) => res.json())
  //              .then((data) => {
  //                console.log(data, "TopicsData");
  //                setTopic(data.data);
  //              })
  // }
  const handlePageClick = async(e) =>{
    console.log(e);
    currentPage.current=e.selected+1;
    setWeekCount(weekCount+1);
    getPaginatedTopics();
    
}
  const getPaginatedTopics = async()=>{
    await fetch(`http://localhost:5000/topics/paginatedTopics?page=${currentPage.current}&limit=${limit}`,{
           method:"GET",
        }).then((res) => res.json())
        .then((data) => {
          console.log(data, "TopicsData");
          setPageCount(data.pageCount);
          setTopic(data.result);
        })
 }
  useEffect(()=>{
    //fetchTopic();
    currentPage.current=1;
    getPaginatedTopics();
  },[])
  return (
    <>
    {/* <div>
    
    </div> */}
    
    <div className='topic-container'>
    {/* <Grid className={classes.searchContainer}>
        <Grid item xs={12} >
        <TextField 
    className={classes.searchInput}
    label="Search"
  variant="outlined"
  size="small"
  
   value={topicname} onChange={(event)=>{setTopicname(event.target.value)}}/>
   <Button sx={{marginLeft:"200px",width:"100px"}} onClick={SearchTopic}>Search</Button>
 
    
   {topic!==null && topic.filter(item=>{
      const searchTerm = topicname.toLowerCase();
      const full_topic = item.name.toLowerCase();
      return searchTerm && full_topic.startsWith(searchTerm) && full_topic!==searchTerm;
    }).map((item)=>(
     <MenuItem key={item._id} onClick={()=>{setTopicname(item.name)}} className={classes.menuItem}>
      {item.name}
     </MenuItem>
   ))}
        </Grid>
    
   
 </Grid> */}
       
       <Box  sx={{display:"flex"}}>
       <Typography variant='h2' style={{marginLeft:"150px",maxWidth:"300px",padding:"1px",marginTop:"40px"}} >Week {currentPage.current}</Typography>
       </Box>
       
       {topic!==null && topic.map((item)=>{
        return(
         
            <div className="card-container">
              
              <div className="card-content">
             
          <div style={{display:"flex"}}>
          <Typography variant='h6' sx={{fontSize:"32px",color:"#1eb2a6"}} >Day:</Typography>
          <Typography variant='h6' sx={{fontSize:"32px",color:"#1eb2a6"}} marginLeft="5px" >{item.day}</Typography>
          </div>
          <div style={{display:"flex"}}>
          <Typography variant='h6' sx={{fontSize:"32px",color:"#1eb2a6"}}  >Lesson: </Typography>
          <Typography variant='h6' sx={{fontSize:"32px",color:"#1eb2a6"}} marginLeft="5px" >{item.lesson}</Typography>
          </div>
        
          <Typography variant="h5" >
           {item.name}
          
          </Typography>
          {/* <Typography >{item.heading}</Typography> */}
              </div>
          
          {/* <button component={Link} to={`/viewDetails/${item._id}`}>View More</button> */}
          <Button component={Link} to={`/viewDetails/${item._id}`}>View More</Button>
        </div>
        
       
          )
        })}
        <div className="card-container">
          <div className="card-content">
            <Typography variant='h4' sx={{marginLeft:"10px"}} >Weekly Test</Typography>
            <Typography sx={{marginLeft:"10px"}}>Test Your Acquired Knowledge</Typography>
              <Button component={Link} to="/quizmain">View More</Button>
          </div>
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
       </>
    
  )
}

export default User
