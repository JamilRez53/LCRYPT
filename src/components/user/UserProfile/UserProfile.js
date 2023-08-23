import React, { useEffect, useState } from 'react'
import {
    makeStyles,
    Card,
    CardContent,
    CardMedia,
    Avatar,
    Typography,
    Button,
  } from "@material-ui/core";
//   import PhoneIcon from "@material-ui/icons/Phone";
  import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { Link } from 'react-router-dom';
const useStyles = makeStyles((theme)=>({
    text: {
        margin: theme.spacing(0, 0, 0.5),
        fontSize: "28px",
        //color: theme.palette.secondary.contrastText,
      },
      avatar: {
        verticalAlign: "middle",
        marginRight: theme.spacing(0.5),
      },
      large: {
        width: theme.spacing(12),
        height: theme.spacing(12),
        margin: theme.spacing(2, 2, 0),
      },
      cardText:{
       display:"inline-block"
      },
      card: {
       
        borderRadius: 15,
        maxWidth: "450px",
        minWidth: "500px",
        height: "500px",
        marginLeft:"500px",
        marginTop:"100px",
        backgroundColor: theme.palette.background.card,
      },
      cardContent: {
        padding: theme.spacing(4, 0, 0, 0),
      },
      editStyle:{
        marginTop:"60px",
        marginLeft:"60px",
      },
      deleteStyle:{
        marginLeft:"150px",
        marginTop:"60px",
        marginRight:"40px",
        alignItems:"space-between"
      }
}))
const UserProfile = () => {
    const classes = useStyles();
    const[user,setUser] = useState("");
    const fetchUser= async() =>{
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
           setUser(data.data);
           });
    }
    const Fname = user.fname;
    const Lname = user.lname;
    const Email = user.email;
    useEffect(()=>{
        fetchUser()
    },[])
    const LogOut = () =>{
        window.localStorage.clear();
        window.location.href="./"
    }
  return (
    <Card
      variant="outlined"
      className={classes.card}
    >
      <CardMedia align="center">
        <Avatar
          alt="Remy Sharp"
        //   src={props?.content?.picture?.large}
          className={classes.large}
        />
      </CardMedia>
      <CardContent className={classes.cardContent}>

           <Typography
          className={classes.text}
          variant="h6"
         align='center'
        >
         {Fname}
        </Typography>
        
       
        <Typography
          className={classes.text}
          variant="h6"
          align='center'
        >
         {Lname}
        </Typography>
        <Typography
          className={classes.text}
          variant="subtitle1"
          align="center"
        >
          <AlternateEmailIcon className={classes.avatar} fontSize="small" />
        {Email}
        </Typography>{" "}
        <CardContent >
            <Button color='inherit' className={classes.editStyle} component={Link} to={`/edituser/${user._id}`}>Edit User</Button>
            <Button  color='inherit' className={classes.deleteStyle} onClick={LogOut} >LogOut</Button>
        </CardContent>
        {/* <Typography
          className={classes.text}
          color="textSecondary"
          variant="subtitle1"
          align="center"
        >
          <PhoneIcon className={classes.avatar} fontSize="small" />
          {props?.content?.cell}
        </Typography>{" "} */}
        {/* <Typography
          className={classes.text}
          color="textSecondary"
          variant="subtitle1"
          align="center"
        >
          <LocationOnIcon className={classes.avatar} fontSize="small" />
          {props?.content?.location?.city}, {props?.content?.location?.country}
        </Typography>{" "} */}
      </CardContent>
    </Card>
  )
}

export default UserProfile
