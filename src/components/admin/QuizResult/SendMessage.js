import React ,{useState,useEffect, useRef}from 'react'
import { useParams,useNavigate, Link } from 'react-router-dom'
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import "./UpdateTopics.css";
import JoditEditor from 'jodit-react'
import Reactquill,{Quill} from 'react-quill';
//import ImageResize from 'quill-image-resize-module-react'
import emailjs from "emailjs-com";
const SendMessage = () => {
  const editor = useRef(null);
     const {id} =useParams();
     const navigate = useNavigate();
     const [admin,setAdmin] = useState("");
    const[inputdata,setinputData] = useState({userId:''})
    //const[description,setDescription] = useState('')
    // const[description,setDescription] = useState('')
    const{ userId } = inputdata;
    useEffect(() => {
      getResult();
      fetchData();
    }, []);
    const getResult = async ()=>{
     await axios.get(`http://localhost:5000/result/getSingleResult/${id}`).then((res)=>{
      const { userId } = res.data;
     setinputData({...inputdata,userId});
    // setDescription(description);
     console.log(setinputData(res.data))
    })
      // console.log(inputdata);
      // console.log(description);     
    }
    const fetchData = async() => {
        await fetch("http://localhost:5000/adminInfo/adminData",{
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
          console.log(data, "adminData");
          setAdmin(data.data);
          if(data.data==="token expired"){
           alert("Token expired login again");
           window.localStorage.clear();
          // window.location.href="./admin";
          navigate("/admin");
          }
          });
        }
        function sendEmail  (e) {
            e.preventDefault();
            emailjs.sendForm(
                "service_91t8osh",
                "template_rr7dmo4",
                e.target,
                "3IGbf-ZCICggQ1b_6"
            ).then((res)=>{
                console.log(res);
            }).catch(err=>{
                console.log(err);
            })
            navigate("/quizresult")   
            
        }
  return (
    <>
       <div className="auth-wrapper">
    <div className="auth-inner">
       {/* onSubmit={UpdateTopic} */}
        <form className='topics-container' onSubmit={sendEmail}>
        <h1>Send Message</h1>  
    {/* <div className="mb-3">
            <label>In</label>
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              value={}
              onChange={(event) => handleChange(event, 'name')}
            />
             </div> */}
             {/* <JoditEditor
          ref={editor}
          value={name}
          onChange={newContent => setinputData({ ...inputdata, name: newContent })}/> */}
         

          <div className="mb-3">
            <label>Instructor Email</label>
            <textarea
              type="text"
              className="form-control"
              placeholder="Instructor Email"
              name="email"
              value={admin.email}
           //   onChange={(event) => handleChange(event, 'heading')}
            />
          </div>
          <div className="mb-3">
            <label>UserId</label>
            <input
              type="text"
              className="form-control"
              placeholder="User ID"
              name="userId"
              value={userId}
             // onChange={(event) => handleChange(event, 'difficulty')}
            />
          </div>
          <div className="mb-3">
            <label>Message</label>
            <input
              type="text"
              className="form-control"
              placeholder="Message"
              name="message"
            //   value={difficulty}
            //   onChange={(event) => handleChange(event, 'difficulty')}
            />
          </div>
          {/* <div className="mb-3">
            
            <textarea
              type="text"
              className="form-control"
              placeholder="Description"
              value={description}
              onChange={(event) => handleContent(event, 'description')}
            />
          </div> */}
          {/* <div className="mb-3">
          <label>Description</label>
          <JoditEditor
          ref={editor}
          value={description}
          onChange={newContent => setinputData({ ...inputdata, description: newContent })}
          />
          </div> */}
          
          {/* <Reactquill
          theme='snow'
          modules={modules}
          value={description}
          onChange={handleContent}
          /> */}
         
          {/* <div className="mb-3">
            <label>Duration</label>
            <input
              type="text"
              className="form-control"
              placeholder="Description"
              value={duration}
              onChange={(event) => handleChange(event, 'duration')}
            />
          </div> */}
          
          <div className="d-grid">
            <button component={Link} to="/topics" type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
        </div>
        </div>
      </>
  )
}

export default SendMessage;