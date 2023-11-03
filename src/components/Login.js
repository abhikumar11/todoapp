import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const Login = ({setUser}) => {
  const [email,setEmail] =useState("");
  const [password,setPassword] =useState("");
  const navigate=useNavigate();
  const handleSubmit=(e)=>{
      e.preventDefault();
        const arr = JSON.parse(localStorage.getItem("user"))||[];
        const id=arr.find((e)=>e.email ===email&&e.password ===password)
        if(id==null){
          alert("please enter valid credentials");
          }
          else{
            setUser(id.email);
            navigate("/");
          }
        
    }
  return (
    <div className="container">
    <div className="row">
      <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div className="card border-0 shadow rounded-3 my-5">
          <div className="card-body p-4 p-sm-5">
            <h4 className="card-title text-center mb-5 fw-light fs-5">Login</h4>
            <form onSubmit={handleSubmit}>
              <div className="form-floating mb-3">
                <input type="email" className="form-control" onChange={(e)=>setEmail(e.target.value)} placeholder="name@example.com"/>
                <label for="floatingInput">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <input type="password" className="form-control" placeholder="Password"  onChange={(e)=>setPassword(e.target.value)}/>
                <label for="floatingPassword">Password</label>
              </div>
              <div className="d-grid">
                <button className="btn btn-primary btn-login text-uppercase fw-bold" type="submit">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Login