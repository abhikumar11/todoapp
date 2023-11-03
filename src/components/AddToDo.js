import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddToDo = ({user}) => {
  const [task,setTask] =useState("");
  const [time,setTime] =useState("");
  const navigate=useNavigate();
  const handleSubmit=(e)=>{
      e.preventDefault();
      const object={task:task,time:time};
        const arr = JSON.parse(localStorage.getItem(user))||[];
        arr.push(object);
        localStorage.setItem(user,JSON.stringify(arr));
        navigate("/");
    }
  return (
    <div className="container">
    <div className="row">
      <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div className="card border-0 shadow rounded-3 my-5">
          <div className="card-body p-4 p-sm-5">
            <h4 className="card-title text-center mb-5 fw-light fs-5">Add new task</h4>
            <form onSubmit={handleSubmit}>
              <div className="form-floating mb-3">
                <input type="text" onChange={(e)=>setTask(e.target.value)} className="form-control" placeholder="enter task"/>
                <label for="floatingInput">Task Name</label>
              </div>
              <div className="form-floating mb-3">
                <input type="text" onChange={(e)=>setTime(e.target.value)} className="form-control"  placeholder="enter time"/>
                <label for="floatingPassword">Time</label>
              </div>
              <div className="d-grid">
                <button className="btn btn-primary btn-login text-uppercase fw-bold" type="submit">Add</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default AddToDo