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
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import AddTutorials from '../../components/admin/TutorialComponent/AddTutorials';
import ReactPaginate from 'react-paginate';
import axios from 'axios';
import { MenuItem } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  table: {
    width: 1000,
    marginLeft:"250px",
    marginTop:'20px',
  },
  searchContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
    marginLeft: '650px'
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
const Tutorials = () => {
  const classes = useStyles();
  const[limit,setLimit] = useState(5);
  const [tutorialname,setTutorialname] = useState("");
  const[pageCount,setPageCount] = useState(1);
  const currentPage = useRef();
  const [tutorials,setTutorials] = useState([]);
  const [isModalOpen,setModalOpen]=useState(false);
  const [isEditModalOpen,setEditModalOpen] = useState(false);
  const StyledTableCell = withStyles((theme) => ({
    head: {
      // backgroundColor: theme.palette.common.black,
      // color: theme.palette.common.white,
    },
    body: {
     // fontSize: 16,
     
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      // "&:nth-of-type(odd)": {
      //   backgroundColor: theme.palette.action.hover,
      // },
      
    },
  }))(TableRow);
  const setShow  = ()=>{
    setModalOpen(true);
  }
  const setClose = () =>{
    setModalOpen(false);
  }
  const deleteTutorial = async(id,name) =>{
    if(window.confirm(`Are u sure u want to delete the topic ${name}`)){
     await fetch("http://localhost:5000/tutorials/deleteTutorials",{
      method:"POST",
        crossDomain:true,
        headers:{
            "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        },
        body:JSON.stringify({
            tutorialid:id,
        }),
     }).then((res) => res.json())
     .then((data) => {
       console.log(data);
       });
    }
  }
  const SearchTutorial = async(e) =>{
    e.preventDefault();
    await axios.get(`http://localhost:5000/tutorials/searchTutorial/${tutorialname}`).then(res=>{
     setTutorials(res.data)
    
    })
    e.target.reset();
  }
  const handlePageClick = async(e) =>{
      console.log(e);
      currentPage.current=e.selected+1;
      getPaginatedTutorials();
      
  }
  const getPaginatedTutorials = async()=>{
     await fetch(`http://localhost:5000/tutorials/paginatedTutorials?page=${currentPage.current}&limit=${limit}`,{
            method:"GET",
         }).then((res) => res.json())
         .then((data) => {
           console.log(data, "TopicsData");
           setPageCount(data.pageCount);
           setTutorials(data.result);
         })
  }
  useEffect(()=>{
    currentPage.current=1;
   // fetchData();
    getPaginatedTutorials();
  },[]);
  
  
  return (
    <>
    
    <Navbar/>
     <Button sx={{marginTop: "100px", marginBottom:2 ,marginLeft:'710px'}} onClick={setShow}>Add Tutorials</Button>

     <div className={classes.searchContainer}>
    
        <TextField 
        className={classes.searchInput}
        label="Search"
      variant="outlined"
      size="small"
      
       value={tutorialname} onChange={(event)=>{setTutorialname(event.target.value)}}/>
       <Button className="search-button" onClick={SearchTutorial}>Search</Button>
     
        
        
       
     </div>
     {tutorials!==null && tutorials.filter(item=>{
          const searchTerm = tutorialname.toLowerCase();
          const full_tutorial = item.name.toLowerCase();
          return searchTerm && full_tutorial.startsWith(searchTerm) && full_tutorial!==searchTerm;
        }).map((item)=>(
         <MenuItem key={item._id} onClick={()=>{setTutorialname(item.name)}} className={classes.menuItem}>
          {item.name}
         </MenuItem>
       ))}
     <TableContainer component={Paper} aria-label="customized table">
      <Table  className={classes.table}>
        <TableHead>
          <StyledTableRow>
            <StyledTableCell >Video Title</StyledTableCell>
            <StyledTableCell >Video Heading</StyledTableCell>
            <StyledTableCell>Video</StyledTableCell>
            <StyledTableCell >Actions</StyledTableCell>
           
          </StyledTableRow>
        </TableHead>
        <TableBody border="none">
          {tutorials!==null && tutorials.map((tutorial) => {
            return(
            <StyledTableRow 
              key={tutorial._id} >
              <StyledTableCell  component="th" scope="row">
                {tutorial.name}
              </StyledTableCell>
              <StyledTableCell >{tutorial.description}</StyledTableCell>
              <StyledTableCell>{tutorial.video}</StyledTableCell>
              <StyledTableCell  >
                <IconButton arial-label="edit" component={Link} to={`/viewTutorials/${tutorial._id}`}>
                  <Visibility/>
                </IconButton>
              <IconButton  aria-label="edit" component={Link} to={`/editTutorials/${tutorial._id}`}>
              
        <Edit />
       
      </IconButton>
      <IconButton onClick={()=>deleteTutorial(tutorial._id,tutorial.name)} aria-label="delete">
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
    <Modal
  open={isModalOpen}
  onClose={setClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={{position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,}}>
   <AddTutorials/>
  </Box>
</Modal>

</>
  )
}

export default Tutorials