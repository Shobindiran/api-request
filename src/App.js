import { useEffect } from "react";
import { useState } from "react";


function App() {

  const [users,setUsers] = useState([])

  useEffect(()=>{
    const fetchData = async()=>{
      try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        setUsers(data)
      }
      catch(err){
        console.log(err)
      }
    }

    fetchData();
  },[])


  return (
    <div className="App">
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <h4>{user.id}</h4>
            <h5>{user.name}</h5>
            <h4>City</h4>
            <h5>{user.address.city}</h5>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
