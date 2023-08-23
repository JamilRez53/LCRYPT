import React ,{useState,useEffect, useRef}from 'react'
import { useParams,useNavigate, Link } from 'react-router-dom'
// import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
// import "./UpdateTopics.css";
// import JoditEditor from 'jodit-react'
// import Reactquill,{Quill} from 'react-quill';
// import ImageResize from 'quill-image-resize-module-react';
const UpdateTopics = () => {
  const editor = useRef(null);
     const {id} =useParams();
     const navigate = useNavigate();
    const[inputdata,setinputData] = useState({week:'',content:''})
    const{ week,content } = inputdata;
    useEffect(() => {
      getTopics();
    }, []);
    const getTopics = async ()=>{
     await axios.get(`http://localhost:5000/syllabus/getSingleContent/${id}`).then((res)=>{
      const { week,content } = res.data;
     setinputData({...inputdata,week,content});
    //  setDescription(description);
     console.log(setinputData(res.data))
    })
      // console.log(inputdata);
      // console.log(description);     
    }
    const UpdateContent = async(e) =>{
      console.log(e);
    e.preventDefault();
        try {
        await axios.put(`http://localhost:5000/syllabus/updateContent/${id}`, {week,content})
        .then((response) => {
        console.log(response);
        const { week,content } = response.data;
        setinputData({ ...inputdata, week,content });
      }).then(
        navigate("/syllabus")
      );
       //let resJson = await res.json();
         
          // e.target.reset();
        } catch (error) {
            console.log(error);
        }
        //e.target.reset();
    
  }
  // const handleChange = (name) => (event) => {
  //   // console.log('name', name, 'event', event.target.value);
  //   setinputData({ ...inputdata, [name]: event.target.value });
  // };
//   const handleContent = (event) => {
//     console.log(event);
//     setDescription(event);
//   };
  const handleChange = (event,fieldName) => {
    console.log(event);
    setinputData({
      ...inputdata,
      [fieldName]: event.target.value
  })
  };
//   Quill.register('modules/imageResize', ImageResize);
//   const  modules  = {
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
//     imageResize: {
//       parchment: Quill.import('parchment'),
//       modules: ['Resize', 'DisplaySize']
//    },
// };
  return (
    <>
    
    
        <form className='topics-container' onSubmit={UpdateContent}>
        <h1>UpdateContent</h1>  
    <div className="mb-3">
            <div className="mb-3">
            <label>Week</label>
            <textarea
              type="text"
              className="form-control"
              placeholder="Week"
              value={week}
              onChange={(event) => handleChange(event, 'week')}
            />
          </div>
          </div>

          <div className="mb-3">
            <label>Content</label>
            <textarea
              type="text"
              className="form-control"
              placeholder="Heading"
              value={content}
              onChange={(event) => handleChange(event, 'content')}
            />
          </div>         
          <div className="d-grid">
            <button  type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
        
      </>
  )
}

export default UpdateTopics