import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { useNavigate,useParams } from 'react-router-dom';
const UserEdit = () => {
  const navigate = useNavigate();

    const {id}=useParams();
    const [result,setResult] = useState([]);
    const[inputdata,setinputData] = useState({fname:'',lname:'',email:''})
    const{ fname,lname,email } = inputdata;
    useEffect(() => {
      getSingleUser();
    }, []);
    const getSingleUser = async ()=>{
     await axios.get(`http://localhost:5000/userEdit/getSingleUser/${id}`).then(res => setinputData(res.data))
           
    }
    const UpdateUser = async(e) =>{
      e.preventDefault()
     await axios.put(`http://localhost:5000/userEdit/updateUser/${id}`,inputdata).then((res)=>{
       console.log(res.data);
     }).then(res=>{
      navigate('/profile')
     })
     alert("User Detail Updated Successfully!!");
    
  }
 
  
  return (
    <div className="auth-wrapper">
    <div className="auth-inner">
    {/*  */}
      <form onSubmit={UpdateUser} >
       <div>
          {/* <img src={Admin} style={{width:"200px", marginLeft:"60px"}}/> */}
        </div>
        <h3> UserDetails Edit</h3>
        <div style={{display:"flex"}}>
        <div className="mb-3" style={{marginRight:"20px"}}>
          <label>First Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter First Name"
            value={fname}
            onChange={(e)=>setinputData({...inputdata,fname:e.target.value})}
          />
        </div>
        <div className="mb-3">
          <label>Last Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Last Name"
            value={lname}
            onChange={(e)=>setinputData({...inputdata,lname:e.target.value})}
          />
        </div>
        </div>
        
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={email}
            onChange={(e)=>setinputData({...inputdata,email:e.target.value})}
          />
        </div>

        {/* <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            //onChange={(e)=>setPassword(e.target.value)}
          />
        </div> */}

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        {/* <div className="message">{message ? <p>{message}</p> : null}</div> */}
        {/* <p className="forgot-password text-right">
            Not registered <a href="/admin-signup">sign Up?</a>
          </p> */}
      </form>
    </div>
  </div>

  )
}

export default UserEdit
