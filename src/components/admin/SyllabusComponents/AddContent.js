import React,{useState,useRef} from 'react'
import JoditEditor from 'jodit-react';
// import  "./Jodit.css";
// import "./AddTopics.css"
// import ReactQuill,{Quill} from 'react-quill';
import axios from 'axios';
import ImageResize from 'quill-image-resize-module-react';
const AddTopics = () => {
  
  const editor = useRef(null);
    const[week,setWeek] = useState('');
    // const[heading,setHeading] = useState('');
    const[content,setContent] = useState('');
    // const[difficulty,setDifficulty] = useState('');
    // const[lesson,setLesson] = useState('');
    // const[day,setDay] = useState('');
   // const[duration,setDuration] = useState('');
    const[message,setMessage] = useState("");
    // const handleContent = (event) => {
    //   console.log(event);
    //   setDescription(event);
    // };
    const SaveContent = async(e) =>{
        console.log(e);
    e.preventDefault();
        try {
            let res = await axios.post("http://localhost:5000/syllabus/addContent",{week,content},{
        method:"POST",
        crossDomain:true,
        headers:{
            "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        },
        body:JSON.stringify({
            week:week,
            content:content,
        }),
     }).then((data) => {
       console.log(data, "ContentAdded");
       setWeek("");
       setContent("");
         setMessage("Content added successfully");
       });
       //let resJson = await res.json();
          
          e.target.reset();
          window.location.href="./syllabus"
         
        } catch (error) {
            console.log(error);
        }
        e.target.reset();
    }
  //   const contentFieldChanaged = (data) => {

  //     setDescription({ ...description, 'content': data })


  // }
//   Quill.register('modules/imageResize', ImageResize);
//   const  modules  = {
//     imageResize: {
//       parchment: Quill.import('parchment'),
//       modules: ['Resize', 'DisplaySize']
//    },
//     toolbar: [
//         [{ font: [] }],
//         [{ header: [1, 2, 3, 4, 5, 6, false] }],
//         ["bold", "italic", "underline", "strike"],
//         [{ color: [] }, { background: [] }],
//         [{ script:  "sub" }, { script:  "super" }],
//         ["blockquote", "code-block"],
//         [{ list:  "ordered" }, { list:  "bullet" }],
//         [{ indent:  "-1" }, { indent:  "+1" }, { align: [] }],
//         ["link", "image", "video"],
//         ["clean"],
//     ],
// };
  
  return (
    <>
    <h1>Add Contents</h1>
    <form className="topic-container1" onSubmit={SaveContent}>
          <div className="mb-3">
            <label>Week</label>
            <textarea
              type="text"
              className="form-control"
              placeholder="Week"
              onChange={(e)=>setWeek(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label>Content</label>
            <textarea
              type="text"
              className="form-control"
              placeholder="Write Something......"
              onChange={(e)=>setContent(e.target.value)}
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <div className="message">{message ? <p>{message}</p> : null}</div>
          </form>
          </>
  )
}

export default AddTopics