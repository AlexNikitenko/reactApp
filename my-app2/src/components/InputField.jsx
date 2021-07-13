import React from 'react';
import './InputField.css';

function InputField({ getData }) {

 
  return (
    <div className="input">

      <input type="text" onChange={ getData }></input>

    </div>
    
  );
}

export default InputField;
