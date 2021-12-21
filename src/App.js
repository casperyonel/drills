import React from 'react';
 
import './App.css';
import { useState } from 'react'
import Comp1 from './Comp1';
import Practice from './Practice';
import Practice2 from './Practice2';

function App() {
  
  const [text, setText] = useState('')
  
  // .
  return (
    <div className="App">
       
      <input type="text" onChange={(e) => setText(e.target.value)}/>

       <div>{text}</div>
        <Practice title="passing a prop"/>
        <Practice2 />
       <Comp1 /> 
    </div>
  );
}

export default App;
