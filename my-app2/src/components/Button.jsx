import React from 'react';
import './Button.css'

function Button({ operation, oper }) {

  return (
    <div className="button">
      <button onClick={ () => oper() }>{ operation }
      </button>

    </div>
  );
}

export default Button;
