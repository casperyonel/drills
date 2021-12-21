import React from 'react';
import './App.css';
import { useState } from 'react'
import Comp1 from './Comp1';
import Practice from './Practice';
import Theme from './Theme';

function App() {
  
  const [text, setText] = useState('')
  
  return (
    <div className='App'>
       
      <input type="text" onChange={(e) => setText(e.target.value)}/>

       <div>{text}</div>
        <Practice title="Passing in a prop"/>
        <Theme />
       <Comp1 /> 
    </div>
  );
}

export default App;
