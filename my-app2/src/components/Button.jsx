import React from 'react';
import './Button.css'

function Button({ operation, input1, input2, getResult }) {

  const mathOperations = {
    '+': (x, y) => Number(x) + Number(y),
    '-': (x, y) => Number(x) - Number(y),
    '*': (x, y) => Number(x) * Number(y),
    '/': (x, y) => Number(x) / Number(y)
  }

  return (
    <div className="button">
      <button onClick={() => {
                        const res = mathOperations[operation](input1, input2);
                        getResult(res);
                        }
                      }>{ operation }
      </button>

    </div>
  );
}

export default Button;
