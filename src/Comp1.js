import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function Comp1() {
  
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const alert1 = () => {
    return alert(
      `Username: ${username} Password: ${password}`      
    )
  }
  
  return (
    <div className="App">
      <input type="text" onChange={e => setUsername(e.target.value)} />
      <input type="text" onChange={e => setPassword(e.target.value)} />
      <input type="submit" onClick={alert1}/>
    </div>
  );
}

export default Comp1;