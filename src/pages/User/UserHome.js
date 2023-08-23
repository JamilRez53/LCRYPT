import React, { useEffect, useRef, useState } from 'react'
import { withStyles,makeStyles } from '@material-ui/core/styles';
import Navbar from "../../components/user/Navbar"
import Button from '@mui/material/Button';
import { IconButton, TextField, Typography } from '@mui/material';
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
import Head from './Head';
import Header from '../../components/user/userHomeComponents/Header';
import Hero from '../../components/user/userHomeComponents/Hero';
import Footer from '../../components/user/userHomeComponents/Foot';
import CountUp from 'react-countup'
import { Box, MenuItem } from '@material-ui/core';
import './UserHome.css'
const useStyles = makeStyles((theme) => ({
  tableContainer: {
    marginBottom: theme.spacing(2),
    marginTop:"550px"
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
const Topics = () => {
  const classes = useStyles();
  const[topiclength,setTopiclength] = useState(0);
  const[limit,setLimit] = useState(5);
  const [topicname,setTopicname] = useState("");
  const[pageCount,setPageCount] = useState(1);
  const currentPage = useRef();
  const [topics,setTopics] = useState([]);
  const [isModalOpen,setModalOpen]=useState(false);
  const [isEditModalOpen,setEditModalOpen] = useState(false);
  const StyledTableCell = withStyles((theme) => ({
    
    head: {
    
    },
    body: {
      fontSize: 16,
     
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
  
  }))(TableRow);
 
  
  
    const fetchData = async() =>{
    await fetch("http://localhost:5000/syllabus/getContent",{
            method:"GET",
         }).then((res) => res.json())
         .then((data) => {
           console.log(data, "TopicsData");
           setTopics(data.data);
         })
  }
   const fetchTopics = async() =>{
    axios.get("http://localhost:5000/topics/getTopiclength").then((res)=>{
      console.log(res.data);
      setTopiclength(res.data);
      console.log(setTopiclength(res.data));
    })
  }
  useEffect(()=>{
    fetchData();
    fetchTopics();
  },[]);

  return (
    <>
    <Header/>
    <Hero/>
   <TableContainer className={classes.tableContainer} component={Paper} aria-label="customized table">
      <Table  className={classes.table}>
        <TableHead>
          <StyledTableRow>
          <StyledTableCell>Week</StyledTableCell>
            <StyledTableCell >Daily Lessons</StyledTableCell>
           
            <StyledTableCell >Actions</StyledTableCell>
           
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {topics!==null && topics.map((topic) => {
            //  const uniqueWeek = [...new Set(topic.week)]
            //  console.log(uniqueWeek)
            return(
            <StyledTableRow 
              key={topic._id} >
              <StyledTableCell  component="th" scope="row">
                {topic.week}
              </StyledTableCell>
              <StyledTableCell  component="th" scope="row">
                {topic.content}
              </StyledTableCell>
              <StyledTableCell  >
                <IconButton arial-label="edit" component={Link} to={`/userTopics/${topic.week}`}>
                  <Visibility/>
                </IconButton>
              </StyledTableCell>
            </StyledTableRow>
     );
     })}
        </TableBody>
        
      </Table>
     
    </TableContainer>
    <Footer/>

</>
  )
}

export default Topics






