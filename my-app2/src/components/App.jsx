import './App.css';
import React, { useState } from 'react';
import Button from './Button';
import InputField from './InputField';
import Result from './Result';


function App() {

  const [result, setResult] = useState(null);

  const inputsObj = {
    input1: null,
    input2: null
  };

  const mathOperations = {
    '+': (x, y) => Number(x) + Number(y),
    '-': (x, y) => Number(x) - Number(y),
    '*': (x, y) => Number(x) * Number(y),
    '/': (x, y) => Number(x) / Number(y)
  }

  const execute = (operationType) => {
    setResult(mathOperations[operationType](inputsObj.input1, inputsObj.input2));
  }

  return (
    <div className="App">
      <div className="buttons">
        <Button operation={'+'} oper={() => execute('+')}/>
        <Button operation={'-'} oper={() => execute('-')}/>
        <Button operation={'*'} oper={() => execute('*')}/>
        <Button operation={'/'} oper={() => execute('/')}/>
      </div>
      <div>
        <InputField getData={inputsObj}/>
      </div>
      <div className="result">
        <Result finalResult={result}/>
      </div>

    </div>
  );
}

export default App;
