import React, { useEffect, useState } from "react";
import ToList from "./ToList";
const Home = ({ user }) => {
     const [list, setList] = useState([]);
     useEffect(() => {
          const items = localStorage.getItem(user) || [];
          setList(items);
     }, []);

     return (
     <div>
      {user ? (<ToList list={list}/>
     ) : (
     <div>
      <h1>please login to view your todo list</h1>
     </div>
     )}
     </div>
     );
};

export default Home;
