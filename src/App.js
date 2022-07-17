import axios from 'axios';
import { useEffect, useState } from 'react';
import UserList from './UserListe'
import './App.css';

function App() {

  const [users,setUsers] = useState ([]);

  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users").then((result)=> {
      setUsers(result.data);
    })
  },[])

  return (
    <div className="App">
      {
        users.map((user,id) => (
        <UserList key={id} userData={user}/>
        ))
      }
    </div>
  );
}

export default App;
  

