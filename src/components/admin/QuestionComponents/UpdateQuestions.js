import React ,{useState,useEffect}from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
const UpdateQuestions = () => {
    const navigate = useNavigate();
    const {id}=useParams();
    const[inputdata,setinputData] = useState({name:'',options:[],description:''})
    const{ name, options ,description } = inputdata;
    useEffect(() => {
      getQuestion();
    }, []);
    const getQuestion = async ()=>{
     await axios.get(`http://localhost:5000/questions/getSingleQuestion/${id}`).then(res => setinputData(res.data))
           
    }
    const UpdateQuestion = async(e) =>{
      e.preventDefault()
     await axios.post(`http://localhost:5000/questions/updateQuestion/${id}`,inputdata).then((res)=>{
      
     }).then(res=>{
      navigate('/questions')
     })
     alert("Question Updated Successfully!!");
    
  }
    return (
        <>
        
        <div className="auth-wrapper">
        <div className="auth-inner">
            <form onSubmit={UpdateQuestion}>
            <h1>UpdateTopic</h1>  
        <div className="mb-3">
                <label>Question</label>
                <textarea
                  type="text"
                  className="form-control"
                  placeholder="Question"
                  style={{height:"150px", width :"300px" }}
                  value={name}
                  onChange={(e)=>setinputData({...inputdata,name:e.target.value})}
                />
              </div>
              <div className="mb-3">
                <label>Question</label>
                <textarea
                  type="text"
                  className="form-control"
                  placeholder="Options"
                  style={{height:"150px", width :"300px" }}
                  value={options}
                  onChange={(e)=>setinputData({...inputdata,options:e.target.value})}
                />
              </div>
              <div className="mb-3">
                <label>Answer</label>
                <textarea
                  type="text"
                  className="form-control"
                  placeholder="Answer"
                  style={{height:"150px", width :"300px" }}
                  value={description}
                  onChange={(e)=>setinputData({...inputdata,description:e.target.value})}
                />
              </div>
    
              <div className="d-grid">
                <button  type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
            </div>
            </div>
          </>
      )
}

export default UpdateQuestions