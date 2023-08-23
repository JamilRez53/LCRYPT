import React, { useState ,useEffect,useRef} from 'react'
import Navbar from '../../components/user/Navbar'
import { makeStyles } from '@material-ui/core/styles';
import "./User.css";
import { Button, Typography,TextField,MenuItem, Grid, Box } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { Card } from '@material-ui/core';
import ReactPaginate from 'react-paginate';
import QuestionSet from "../../components/user/quizComponents/QuizMain"
import Hero from './Hero';
import Head from './Head';
import Header from './Header';
import Footer from './Foot';
import UserQuiz from "./UserQuiz";
import UserView from "./UserView";
// const useStyles = makeStyles((theme) => ({
//   table: {
//     minWidth: 700,
//   },
//   searchContainer: {
//     justifyContent:'center',
//     marginBottom: '20px',
//     marginLeft: '650px',
//     marginTop:'20px',
//     position:'relative'
//   },
//   searchInput: {
    
//     borderRadius: theme.shape.borderRadius,
//   },
//   menuItem: {
//     '&:hover': {
//       backgroundColor: theme.palette.primary.main,
//       color: theme.palette.common.white,
//     },
//     marginLeft:'650px',
//     width:'250px'
//   }

// }));
const User = () => {
  
  return (
    <>
    <Header/>
    <Hero/>
      <UserView />
       <Footer/>
       </>
    
  )
}

export default User
