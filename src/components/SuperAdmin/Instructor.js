import React, { useEffect, useRef, useState } from 'react'
import { withStyles,makeStyles } from '@material-ui/core/styles';
import Navbar from "./Navbar"
import Button from '@mui/material/Button';
import { IconButton, TextField, Typography } from '@mui/material';
import { Edit, Delete,Visibility, Dashboard } from '@mui/icons-material';
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
//import Head from './Head';
// import Header from '../../components/user/userHomeComponents/Header';
// import Hero from '../../components/user/userHomeComponents/Hero';
import Footer from '../../components/user/userHomeComponents/Foot';
import CountUp from 'react-countup'
import { Box, MenuItem } from '@material-ui/core';
//import './UserHome.css'
const useStyles = makeStyles((theme) => ({
  tableContainer: {
    marginBottom: theme.spacing(2),
   // marginTop:"150px"
  },
    table: {
      width: 1000,
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
const Instructor = () => {
  const classes = useStyles();
  const[topiclength,setTopiclength] = useState(0);
  const[limit,setLimit] = useState(5);
  const [topicname,setTopicname] = useState("");
  const[pageCount,setPageCount] = useState(1);
  const currentPage = useRef();
  const [instructor,setInstructor] = useState([]);
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
  }))(TableRow);
 
  // const SearchTopic = async() =>{
  //   await axios.get(`http://localhost:5000/topics/searchTopic/${topicname}`).then(res=>{
  //    setTopics(res.data)
  //   })
  // }
  // const handlePageClick = async(e) =>{
  //     console.log(e);
  //     currentPage.current=e.selected+1;
  //     getPaginatedTopics();
      
  // }
    const fetchData = async() =>{
    await fetch("http://localhost:5000/getInfo/getAllInstructor",{
            method:"GET",
         }).then((res) => res.json())
         .then((data) => {
           console.log(data, "InstructorData");
           setInstructor(data.data);
         })
  }

  const deleteInstructor = async(id,name) =>{
    if(window.confirm(`Are u sure u want to delete the instructor ${name}`)){
     await fetch("http://localhost:5000/getInfo/deleteAdmin",{
      method:"POST",
        crossDomain:true,
        headers:{
            "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        },
        body:JSON.stringify({
            adminid:id,
        }),
     }).then((res) => res.json())
     .then((data) => {
       console.log(data);
       });
    }
  }
  useEffect(()=>{
    
    fetchData();
  },[]);
  
  //const repetitiveColumn = 'week';
  //const uniqueValues = [...new Set(topics.map((item) => item[repetitiveColumn]))];
  return (
    <>
    
    <Navbar/>
        
           
    <Typography variant='h5' sx={{marginLeft:"200px",marginTop:"150px",marginBottom:"40px"}}>Instructor Info:</Typography>  
     <TableContainer className={classes.tableContainer} component={Paper} aria-label="customized table">
      <Table  className={classes.table}>
        <TableHead>
          <StyledTableRow>
            <StyledTableCell>Email</StyledTableCell>
            <StyledTableCell>Contact No.</StyledTableCell>
            <StyledTableCell >Actions</StyledTableCell>
           
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {instructor!==null && instructor.map((item) => {
            //  const uniqueWeek = [...new Set(topic.week)]
            //  console.log(uniqueWeek)
            return(
            <StyledTableRow 
              key={item._id} >
                <StyledTableCell component="th" scope="row">
                 {item.email}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                 {item.contact}
                </StyledTableCell>
              <StyledTableCell  >
              <IconButton onClick={()=>deleteInstructor(item._id,item.email)} aria-label="delete">
        <Delete/>
      </IconButton>
              </StyledTableCell>
            </StyledTableRow>
     );
     })}
        </TableBody>
        
      </Table>
     
    </TableContainer>
    {/* <Footer/> */}
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

export default Instructor






