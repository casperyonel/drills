import React from 'react';
import './App.css';
import { useState } from 'react'

function App() {
  
  const [task, setTask] = useState([])
  const [userInput, setUserInput] = useState([])
  
  function handleClick() {
    setTask([...task, userInput])
    setUserInput('')
  }
  
  return (
    <div className="App">
      <h1>My to-do list:</h1>
      
      <input placeholder="Enter new task" type="text"   onChange={e => setUserInput(e.target.value)}/>
      
      <input type="submit" value="Add" onClick={handleClick} />
      
      {task.map((val, i) => {
        return <p key={i}>{val}</p>
      })}

    </div>
  );
}

export default App;