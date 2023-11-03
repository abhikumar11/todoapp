import React, { useEffect, useState } from "react";
const Home = ({ user }) => {
     const [list, setList] = useState([]);
     useEffect(() => {
          const items = localStorage.getItem(user) || [];
          setList(items);
     }, []);

     return (
     <div>
      {user ? (
      <p>{list}</p>
     ) : (
     <div>
      <h1>please login to view your todo list</h1>
     </div>
     )}
     </div>
     );
};

export default Home;
