import './App.css';
import React, { useState } from 'react';

function App() {


  const [data, setData] = useState(0);
  let input1 = null;
  let input2 = null;
  return (
    <div className="App">
      <button onClick={() => setData(Number(input1) + Number(input2))}>+</button>
      <button onClick={() => setData(Number(input1) - Number(input2))}>-</button>
      <button onClick={() => setData(Number(input1) * Number(input2))}>*</button>
      <button onClick={() => setData(Number(input1) / Number(input2))}>/</button>
      <div>
        <input className="input1" onChange={(ev) => input1 = ev.target.value}></input>
        <input className="input2" onChange={(ev) => input2 = ev.target.value}></input>
      </div>
      <div className="results">
        { data }
      </div>

    </div>
  );
}

export default App;
