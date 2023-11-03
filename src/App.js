import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import AddToDo from "./components/AddToDo";
import RouteError from "./components/RouteError";
import Navbar from "./components/Navbar";
function App() {
     const [user, setUser] = useState(null);
     console.log(user);
     return (
          <div className="App">
               <Navbar  user={user}/>
               <Routes>
                    <Route exact path="/" element={<Home user={user} />} />
               </Routes>
               <Routes>
                    <Route exact path="/login" element={<Login setUser={setUser} />} />
               </Routes>
               <Routes>
                    <Route exact path="/signup" element={<Signup />} />
               </Routes>
               <Routes>
                    <Route
                         exact
                         path="/add"
                         element={user ? <AddToDo user={user}/> : <RouteError />}
                    />
               </Routes>
          </div>
     );
}

export default App;
