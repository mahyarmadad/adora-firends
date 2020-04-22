import React, { useState } from 'react';
import './App.css';
import Cardlist from './cardlist';
import Search from './search';
import Insert from './insert';

function App() {
  const [searchtxt, setsearchtxt] = useState("");
  const [users, setusers] = useState([]);

  function onSearchChange(event) {
    setsearchtxt(event.target.value);
  }
  function oninsertChange() {

  }

  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(user => { setusers(user) })

  const filterfriend = users.filter(robot => {
    return robot.name.toLowerCase().includes(searchtxt.toLowerCase())
  })
  return (
    <div className="text-center container" >
      <h1 id="title">Adora Friends</h1>
      <div className="mt-4 text-center">
        <Insert insertChange={oninsertChange} />
        <Search searchChange={onSearchChange} />
      </div>
      <div className="list">
        <Cardlist users={filterfriend} />
      </div>
      <footer className="footer">
        <p>&reg; Developed by Mahyarmadad &copy; 2020</p>
      </footer>
    </div>

  );
}

export default App;