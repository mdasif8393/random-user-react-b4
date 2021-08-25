import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import User from './User/User';

function App() {
  const [user, setUser] = useState([]);

  useEffect(() =>{
    fetch('https://randomuser.me/api/?results=15')
    .then(res => res.json())
    .then(data => setUser(data.results))

  } ,[])
  return (
    <div className="App">
      {
        user.map(user => <User user={user}></User>)
      }
    </div>
  );
}

export default App;
