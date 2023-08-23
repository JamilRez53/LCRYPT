import React ,{useState}from 'react'
import Admin from "../../../assets/Instructor.jpeg"
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
const UserAuth = () => {
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const[message,setMessage] = useState("");
   
    const handleInputs=async(e)=>{
      console.log(e);
      e.preventDefault();
      try {
          let res = await fetch("http://localhost:5000/admin/login",{
          method:"POST",
          crossDomain:true,
          headers:{
              "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
          },
          body:JSON.stringify({
              email:email,
              password:password
          }),
       }).then((res) => res.json())
       .then((data) => {
         console.log(data, "adminLogin");
         if (data.status === "ok") {
            alert("login successful");
            window.localStorage.setItem("token", data.data);
            window.localStorage.setItem("instructorloggedIn", true);
  
            window.location.href = "./topics";
          }
         });
        

      } catch (error) {
          console.log(error);
      }
    }
  return (
    <div className="auth-wrapper">
    <div className="auth-inner">
      <form onSubmit={handleInputs}>
       <div>
          <img src={Admin} style={{width:"200px", marginLeft:"60px"}}/>
        </div>
        <h3> Instructor Login</h3>
        
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(e)=>setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(e)=>setPassword(e.target.value)}
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <div className="message">{message ? <p>{message}</p> : null}</div>
        <p className="forgot-password text-right">
            Not registered <a href="/instructor-signup">sign Up?</a>
          </p>
      </form>
    </div>
  </div>
  )

}
export default UserAuth