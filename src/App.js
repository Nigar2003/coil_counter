import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';


function App() {
  let [num, setNum]= useState(0)
  const Increase = () =>{
   
      setNum(num + 1);
    
  };

  const Decrease = () =>{
   
      setNum(num - 1);
    
  };
  return (
    <div className="App">
<button onClick={Increase}>+</button>
<span>{num}</span>
<button onClick={Decrease}>-</button>
    </div>
  );
}

export default App;
