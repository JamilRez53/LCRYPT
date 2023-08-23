import React from 'react'
import { withStyles,makeStyles } from '@material-ui/core/styles';
import AboutBackground from "../../../assets/About.png";
//import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { Typography } from '@mui/material';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
const useStyles = makeStyles((theme) => ({
  tableContainer: {
    marginBottom: theme.spacing(2),
    marginRight:"180px"
  },
    table: {
      width: 300,
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
const About = () => {
  const classes = useStyles();
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
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img width="600px" src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        {/* <img src={AboutBackgroundImage} alt="" /> */}
      </div>
      <div className="about-section-text-container" style={{marginRight:"100px"}}>
        <Typography variant='h4' className="primary-subheading">An Overview of the entire course.</Typography>
        {/* <Typography variant='h3' className="primary-heading">
          CyberSecurity knowledge ian important point in this ever-growing technological world.
        </Typography> */}
         <TableContainer className={classes.tableContainer} component={Paper} aria-label="customized table">
      <Table  className={classes.table}>
        <TableHead>
          <StyledTableRow>
            <StyledTableCell >Title</StyledTableCell>
           
          </StyledTableRow>
        </TableHead>
        <TableBody>
          <StyledTableRow>
            <StyledTableCell>
            Concept and applications of cryptography,
            </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
            <StyledTableCell>
            Techniques of designing efficient Cryptosystems: Symmetric key encryption-Stream ciphers
            </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
            <StyledTableCell>
            Block ciphers
            </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
            <StyledTableCell>
           Message authentication codes
           </StyledTableCell>
           </StyledTableRow>
           <StyledTableRow>
            <StyledTableCell>
            Hash function;
            </StyledTableCell>
           </StyledTableRow>
           <StyledTableRow>
           <StyledTableCell>
           Digital signature; 
           </StyledTableCell>
           </StyledTableRow>
           <StyledTableRow>
            <StyledTableCell>
            Asymmetric key encryption-Diffie-Hellman protocol
            </StyledTableCell>
           </StyledTableRow>
           <StyledTableRow>
            <StyledTableCell>
            Trapdoor functions
            </StyledTableCell>
           </StyledTableRow>
           <StyledTableRow>
            <StyledTableCell>
            RSA
            </StyledTableCell>
           </StyledTableRow>
           <StyledTableRow>
            <StyledTableCell>
            Merkel puzzles
            </StyledTableCell>
           </StyledTableRow>
           <StyledTableRow>
            <StyledTableCell>
            El-Gammal cryptosystems
            </StyledTableCell>
            </StyledTableRow> 
            <StyledTableRow>
              <StyledTableCell>
              Linear and differential cryptanalysis
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell>
              Mathematics of cryptography
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell>
              Lightweight cryptographic protocols
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell>
              Steganography
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell>
              Fundamental properties and terminology of information security
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell>
              System security management, analysis and control
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell>
              Physical and logical security
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell>
              Types of attacks
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell>
              Database security
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell>
              Network security threats
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell>
              WSN security
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell>
              Fundamental of Cybersecurity
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell>
              IoT network and IoT device security
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell>
              Blockchain
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell>
              Secure Cloud computing
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell>
              Computer abuse
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell>
                Legal and Ethical issues.
              </StyledTableCell>
            </StyledTableRow>




            {/* </StyledTableCell>
          </StyledTableRow> */}
        </TableBody>
        </Table>
        </TableContainer>
        {/* <Typography className="primary-text">
        The importance of cyber security comes down to the need and requirement to keep information, data, and devices secure.
         In today's world, people store vast quantities of data on computers, servers and other connected devices. 
        </Typography> */}
        {/* <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div> */}
      </div>
    </div>
  )
}

export default About
