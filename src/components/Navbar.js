import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({user}) => {
     return (
          <div>
               <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container">
                         <div
                              class="collapse navbar-collapse"
                              id="navbarButtonsExample"
                         >
                              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                   <li class="nav-item">
                                        <h4>
                                             To Do List
                                        </h4>
                                   </li>
                              </ul>

                              <div class="d-flex align-items-center">
                                   {user?(
                                        <div>
                                        <Link to={"/add"}><button
                                        type="button"
                                        class="btn btn-primary px-3 me-2"
                                   >
                                        Add
                                   </button></Link>
                                  
                                   <button
                                        type="button"
                                        class="btn btn-primary me-3"
                                   >
                                        Logout
                                   </button>
                                   </div>
                                   ):(
                                        <div>
                                        <Link to={"/login"}><button
                                        type="button"
                                        class="btn btn-primary px-3 me-2"
                                   >
                                        Login
                                   </button></Link>
                                   <Link to={"/signup"}>
                                   <button
                                        type="button"
                                        class="btn btn-primary me-3"
                                   >
                                        Signup
                                   </button>
                                   </Link>
                                   </div>
                                   )}
                                   
                              </div>
                         </div>
                    </div>
               </nav>
          </div>
     );
};

export default Navbar;
