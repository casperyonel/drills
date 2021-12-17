import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function App() {
  
  const [text, setText] = useState('')
  
  // function displayText(text) {
  //   return text
  // }
  
  return (
    <div className="App">
       

      <input type="text" onChange={(e) => setText(e.target.value)}/>

      {/* <input type="submit" onClick={displayText} /> */}

       <div>{text}</div>
    </div>
  );
}

export default App;
