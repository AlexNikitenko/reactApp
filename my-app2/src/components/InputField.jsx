import React from 'react';
import './InputField.css';

function InputField({ getData }) {

 
  return (
    <div className="inputs">

      <input type="text" onChange={(ev) => getData.input1 = ev.target.value }></input>
      <input type="text" onChange={(ev) => getData.input2 = ev.target.value }></input>

    </div>
    
  );
}

export default InputField;
