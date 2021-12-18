import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import Comp1 from './Comp1';

function App() {
  
  const [text, setText] = useState('')
  
  // .
  return (
    <div className="App">
       
      <input type="text" onChange={(e) => setText(e.target.value)}/>

       <div>{text}</div>

       <Comp1 /> 
    </div>
  );
}

export default App;
