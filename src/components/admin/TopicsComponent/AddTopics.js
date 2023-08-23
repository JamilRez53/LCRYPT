import React,{useState,useRef} from 'react'
import JoditEditor from 'jodit-react';
import  "./Jodit.css";
import "./AddTopics.css"
import ReactQuill,{Quill} from 'react-quill';
import axios from 'axios';
import ImageResize from 'quill-image-resize-module-react';
const AddTopics = () => {
  
  const editor = useRef(null);
    const[name,setname] = useState('');
    const[week,setWeek] = useState('');
    const[heading,setHeading] = useState('');
    const[description,setDescription] = useState('');
    // const[difficulty,setDifficulty] = useState('');
    const[lesson,setLesson] = useState('');
    const[day,setDay] = useState('');
   // const[duration,setDuration] = useState('');
    const[message,setMessage] = useState("");
    const handleContent = (event) => {
      console.log(event);
      setDescription(event);
    };
    const SaveTopic = async(e) =>{
        console.log(e);
    e.preventDefault();
        try {
            let res = await axios.post("http://localhost:5000/topics/addTopics",{name,week,heading,description,day,lesson},{
        method:"POST",
        crossDomain:true,
        headers:{
            "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        },
        body:JSON.stringify({
            name:name,
            week:week,
            heading:heading,
            description:description,
            day:day,
            lesson:lesson
        }),
     }).then((data) => {
       console.log(data, "TopicAdded");
       setname("");
       setWeek("");
       setDescription("");
       setHeading("");
       setDay("");
       setLesson("");
         setMessage("Topic added successfully");
       });
       //let resJson = await res.json();
          
          e.target.reset();
          alert("Topic Added Successfully")
          window.location.href="./Topics"
         
        } catch (error) {
            console.log(error);
        }
        e.target.reset();
    }
  //   const contentFieldChanaged = (data) => {

  //     setDescription({ ...description, 'content': data })


  // }
  Quill.register('modules/imageResize', ImageResize);
  const  modules  = {
    imageResize: {
      parchment: Quill.import('parchment'),
      modules: ['Resize', 'DisplaySize']
   },
    toolbar: [
        [{ font: [] }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["bold", "italic", "underline", "strike"],
        [{ color: [] }, { background: [] }],
        [{ script:  "sub" }, { script:  "super" }],
        ["blockquote", "code-block"],
        [{ list:  "ordered" }, { list:  "bullet" }],
        [{ indent:  "-1" }, { indent:  "+1" }, { align: [] }],
        ["link", "image", "video"],
        ["clean"],
    ],
};
  
  return (
    <>
    <h1>Add Topic</h1>
    <form className="topic-container1" onSubmit={SaveTopic}>

    
    <div className="mb-3">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              onChange={(e)=>setname(e.target.value)}
            />
          </div>
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
            <label>Heading</label>
            <textarea
              type="text"
              className="form-control"
              placeholder="Heading"
              onChange={(e)=>setHeading(e.target.value)}
            />
          </div>
          <label>Description</label>
          <ReactQuill
          theme='snow'
          className='ql-container'
          modules={modules}
          value={description}
          onChange={handleContent}
          />
           <div className="mb-3">
            <label>Day</label>
            <textarea
              type="text"
              className="form-control"
              placeholder="Day"
              onChange={(e)=>setDay(e.target.value)}
            />
          </div>

            <div className="mb-3">
            <label>Lesson</label>
            <textarea
              type="text"
              className="form-control"
              placeholder="Lesson"
              onChange={(e)=>setLesson(e.target.value)}
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