import React,{useState,useEffect} from 'react'
import { useNavigate,useParams } from 'react-router-dom';
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
const UpdateTutorials = () => {
    const {id} =useParams();
    const navigate = useNavigate();
    const[inputdata,setinputData] = useState({name:'',description:'',video:''})
    const[video,setVideo] = useState("");
    const{ name,description } = inputdata;
    useEffect(() => {
      fetchVideo();
    }, []);
   const fetchVideo = async() =>{
    await fetch(`http://localhost:5000/tutorials/getSingleTutorial/${id}`,{
            method:"GET",
         }).then((res) => res.json())
         .then((data) => {
          const { name,description,video } = data.data;
           console.log(data, "TutorialsData");
           setinputData({...inputdata,name,description});
           setVideo(video);
         })
  }
  const UpdateTutorial = async(e) =>{
    console.log(e);
e.preventDefault();
let formdata = new FormData();
// for (let key in videos) {
//   formdata.append("videos", videos[key]);
// }

formdata.append("name", name);
formdata.append("description",description)
formdata.append("video",video)
 await axios.put(`http://localhost:5000/tutorials/updateTutorial/${id}`, formdata)
  .then((success) => {
    alert("Submitted successfully");
  })
  .catch((error) => {
    console.log(error);
    alert("Error happened!");
  });

  //  e.target.reset();
}
  const handleFileChange = (event) => {
    const selectedVideos = event.target.files[0];
    setVideo(selectedVideos);
  };
  
  return (
    <>
    
    <div className="auth-wrapper">
    <div className="auth-inner">
        <form onSubmit={UpdateTutorial} encType='multipart/form-data'>
        <h1>UpdateTutorial</h1>  
    <div className="mb-3">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              value={name}
              onChange={(e)=>setinputData({...inputdata,name:e.target.value})}
            />
          </div>

          <div className="mb-3">
            <label>Description</label>
            <textarea
              type="text"
              className="form-control"
              placeholder="Description"
              style={{height:"200px", width :"300px" }}
              value={description}
              onChange={(e)=>setinputData({...inputdata,description:e.target.value})}
            />
          </div>
          <label >Upload Videos</label>
          <input
            type="file"
            name="video"
            id="video"
            multiple
            className="form-control"
            accept=".mp4, .mkv"
           // value={video}
            onChange={ 
              //setinputData({...inputdata, video:e.target.files[0]});
              handleFileChange
            }
          />
      
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
        </div>
        </div>
      </>
  )
  
}

export default UpdateTutorials
