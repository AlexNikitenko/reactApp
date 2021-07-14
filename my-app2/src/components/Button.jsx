import React from 'react';
import './Button.css'

function Button({ operation, operationResult }) {

  return (
    <div className="button">
      <button onClick={ () => operationResult(operation) }>{ operation }
      </button>

    </div>
  );
}

export default Button;
