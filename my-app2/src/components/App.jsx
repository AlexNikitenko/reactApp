import './App.css';
import React, { useState } from 'react';
import Button from './Button';
import InputField from './InputField';
import Result from './Result';


function App() {

  const [data1, setData1] = useState(null);
  const [data2, setData2] = useState(null);
  const [result, setResult] = useState(null);

  return (
    <div className="App">
      <div className="buttons">
        <Button operation={'+'} input1={data1} input2={data2} getResult={(operationResult) => setResult(operationResult)}/>
        <Button operation={'-'} input1={data1} input2={data2} getResult={(operationResult) => setResult(operationResult)}/>
        <Button operation={'*'} input1={data1} input2={data2} getResult={(operationResult) => setResult(operationResult)}/>
        <Button operation={'/'} input1={data1} input2={data2} getResult={(operationResult) => setResult(operationResult)}/>
      </div>
      <div className="inputs">
        <InputField getData={(ev) => setData1(ev.target.value)}/>
        <InputField getData={(ev) => setData2(ev.target.value)}/>
      </div>
      <div className="result">
        <Result finalResult={result}/>
      </div>

    </div>
  );
}

export default App;
