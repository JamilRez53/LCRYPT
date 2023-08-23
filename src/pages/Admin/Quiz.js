import React, { useEffect, useRef, useState } from 'react'
import { withStyles,makeStyles } from '@material-ui/core/styles';
import Navbar from "../../components/admin/Navbar"
import Button from '@mui/material/Button';
import { IconButton, TextField } from '@mui/material';
import {  Delete,Visibility, Email } from '@mui/icons-material';
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
        marginLeft:"250px",
        marginTop:'20px',
      },
      searchContainer: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '20px',
        marginLeft: '600px',
        marginTop:"150px",
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
const Quiz = () => {
  const classes = useStyles();
  const[limit,setLimit] = useState(5);
  const [userId,setUserId] = useState("");
  const[pageCount,setPageCount] = useState(1);
  const currentPage = useRef();
  const [results,setResult] = useState([]);
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
  const deleteResult = async(id,userId) =>{
    if(window.confirm(`Are u sure u want to delete the result of ${userId}`)){
     await fetch("http://localhost:5000/result/deleteResult",{
      method:"POST",
        crossDomain:true,
        headers:{
            "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        },
        body:JSON.stringify({
            resultid:id,
        }),
     }).then((res) => res.json())
     .then((data) => {
       console.log(data);
       });
    }
  }
  const searchUser = async() =>{
    await axios.get(`http://localhost:5000/result/searchResult/${userId}`).then(res=>{
     setResult(res.data)
    })
  }
  const handlePageClick = async(e) =>{
    console.log(e);
    currentPage.current=e.selected+1;
    getPaginatedUsers();
    
}
  const getPaginatedUsers = async()=>{
    await fetch(`http://localhost:5000/result/paginatedResults?page=${currentPage.current}&limit=${limit}`,{
           method:"GET",
        }).then((res) => res.json())
        .then((data) => {
          console.log(data, "TopicsData");
          setPageCount(data.pageCount);
          setResult(data.result);
        })
 }
 useEffect(()=>{
    currentPage.current=1;
   // fetchData();
    getPaginatedUsers();
  },[]);
  return (
    <>
    
    <Navbar/>
     
     <div className={classes.searchContainer}>
    
        <TextField 
        className={classes.searchInput}
        label="Search"
      variant="outlined"
      size="small"
      
       value={userId} onChange={(event)=>{setUserId(event.target.value)}}/>
       <Button className="search-button" onClick={searchUser}>Search</Button>
     
        
        
       
     </div>
     {results!==null && results.filter(item=>{
          const searchTerm = userId.toLowerCase();
          //const full_topic = item.name.toLowerCase();
          const user = item.userId;
          return searchTerm && user.startsWith(searchTerm) && user!==searchTerm;
        }).map((item)=>(
         <MenuItem key={item._id} onClick={()=>{setUserId(item.userId)}} className={classes.menuItem}>
          {item.userId}
         </MenuItem>
       ))}
     <TableContainer className={classes.tableContainer} component={Paper} aria-label="customized table">
      <Table  className={classes.table}>
        <TableHead>
          <StyledTableRow>
            <StyledTableCell >Week</StyledTableCell>
            <StyledTableCell >UserId</StyledTableCell>
            <StyledTableCell>Obtained Score</StyledTableCell>
            <StyledTableCell >Total Score</StyledTableCell>
            <StyledTableCell> Result Status</StyledTableCell>
            <StyledTableCell>Actions</StyledTableCell>
           
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {results!==null && results.map((result) => {
            return(
            <StyledTableRow 
              key={result._id} >
              <StyledTableCell  component="th" scope="row">
                {result.week}
              </StyledTableCell>
              <StyledTableCell  component="th" scope="row">
                {result.userId}
              </StyledTableCell>
              <StyledTableCell  component="th" scope="row">
                {result.obtainedScore}
              </StyledTableCell>
              <StyledTableCell  component="th" scope="row">
                {result.totalScore}
              </StyledTableCell>
              <StyledTableCell style={{color:`${result.QuizResult==="Passed"?"#2aff95":"#ff2a66" }`}} component="th" scope="row">
                {result.QuizResult}
              </StyledTableCell>
              <StyledTableCell  >
                {/* <IconButton arial-label="edit" component={Link} to={`/viewTopics/${topic._id}`}>
                  <Visibility/>
                </IconButton>
              <IconButton  aria-label="edit" component={Link} to={`/editTopics/${topic._id}`}>
              
        <Edit />
       
      </IconButton> */}
       <IconButton  aria-label="edit" component={Link} to={`/sendMessage/${result._id}`}>
              
              <Email/>
             
            </IconButton>
      <IconButton onClick={()=>deleteResult(result._id,result.userId)} aria-label="delete">
        <Delete/>
      </IconButton>
              </StyledTableCell>
            </StyledTableRow>
     );
     })}
        </TableBody>
        
      </Table>
     
    </TableContainer>
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

export default Quiz