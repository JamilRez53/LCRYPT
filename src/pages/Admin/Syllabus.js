import React, { useEffect, useRef, useState } from 'react'
import { withStyles,makeStyles } from '@material-ui/core/styles';
import Navbar from "../../components/admin/Navbar"
import Button from '@mui/material/Button';
import { IconButton, TextField } from '@mui/material';
import { Edit, Delete,Visibility } from '@mui/icons-material';
import { Link, useParams } from 'react-router-dom';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import ReactPaginate from 'react-paginate';
import axios from 'axios';
import { MenuItem } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  tableContainer: {
    marginBottom: theme.spacing(2),
  },
    table: {
      width: 1000,
      fontSize:"16px",
      marginLeft:"250px",
      marginTop:'20px',
    },
    searchContainer: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '20px',
      marginLeft: '600px'
    },
    searchInput: {
      marginLeft:"600px",
      borderRadius: theme.shape.borderRadius,
    },
    menuItem: {
      '&:hover': {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
      },
      marginLeft:'600px',
      width:'250px'
    }
 
}));
const Topics = () => {
  const classes = useStyles();
  const[limit,setLimit] = useState(5);
  const [topicname,setTopicname] = useState("");
  const[pageCount,setPageCount] = useState(1);
  const currentPage = useRef();
  const [topics,setTopics] = useState([]);
  const [isModalOpen,setModalOpen]=useState(false);
  const [isEditModalOpen,setEditModalOpen] = useState(false);
  const StyledTableCell = withStyles((theme) => ({
    
    head: {
      // backgroundColor: theme.palette.common.black,
      // color: theme.palette.common.white,
    },
    body: {
      fontSize: 16,
     
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    // root: {
    //   "&:nth-of-type(odd)": {
    //     backgroundColor: theme.palette.action.hover,
    //   },
      
    // },
    body: {
      fontSize: 16,
     
    },
  }))(TableRow);
  const setShow  = ()=>{
    setModalOpen(true);
  }
  const setClose = () =>{
    setModalOpen(false);
  }
 const fetchData = async() =>{
    await fetch("http://localhost:5000/syllabus/getContent",{
            method:"GET",
         }).then((res) => res.json())
         .then((data) => {
           console.log(data, "TopicsData");
           setTopics(data.data);
         })
  }
  useEffect(()=>{
   
    fetchData();

},[]);
  const deleteTopic = async(id,name) =>{
    if(window.confirm(`Are u sure u want to delete the topic ${name}`)){
     await fetch("http://localhost:5000/syllabus/deleteContent",{
      method:"POST",
        crossDomain:true,
        headers:{
            "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        },
        body:JSON.stringify({
            contentid:id,
        }),
     }).then((res) => res.json())
     .then((data) => {
       console.log(data);
       });
    }
  }
  
  
  
  return (
    <>
    
    <Navbar/>
     <Button sx={{marginLeft:"670px",marginTop:"80px"}}  component={Link} to={"/addContent"}>Add Content</Button>

     {/* <div className={classes.searchContainer}>
    
        <TextField 
        className={classes.searchInput}
        label="Search"
      variant="outlined"
      size="small"
      
       value={topicname} onChange={(event)=>{setTopicname(event.target.value)}}/>
       <Button className="search-button" onClick={SearchTopic}>Search</Button>
     
        
        
       
     </div>
     {topics!==null && topics.filter(item=>{
          const searchTerm = topicname.toLowerCase();
          //const full_topic = item.name.toLowerCase();
          const full_topic = item.name;
          return searchTerm && full_topic.startsWith(searchTerm) && full_topic!==searchTerm;
        }).map((item)=>(
         <MenuItem key={item._id} onClick={()=>{setTopicname(item.name)}} className={classes.menuItem}>
          {item.name}
         </MenuItem>
       ))} */}
     <TableContainer className={classes.tableContainer} component={Paper} aria-label="customized table">
      <Table  className={classes.table}>
        <TableHead>
          <StyledTableRow>
            <StyledTableCell style={{fontSize:"16px"}}>Week</StyledTableCell>
           <StyledTableCell style={{fontSize:"16px"}}>The contents which will be covered in each week</StyledTableCell>
            <StyledTableCell style={{fontSize:"16px"}}>Actions</StyledTableCell>
           
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {topics!==null && topics.map((topic) => {
            return(
            <StyledTableRow 
              key={topic._id} >
              <StyledTableCell  component="th" scope="row">
                {topic.week}
              </StyledTableCell>
              <StyledTableCell  component="th" scope="row">
                {topic.content}
              </StyledTableCell>
              <StyledTableCell>
              <IconButton  aria-label="edit" component={Link} to={`/editContent/${topic._id}`}>
              
        <Edit />
       
      </IconButton>
      <IconButton onClick={()=>deleteTopic(topic._id,topic.name)} aria-label="delete">
        <Delete/>
      </IconButton>
              </StyledTableCell>
            </StyledTableRow>
     );
     })}
        </TableBody>
        
      </Table>
     
    </TableContainer>
    {/* <ReactPaginate
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
      /> */}

</>
  )
}

export default Topics






