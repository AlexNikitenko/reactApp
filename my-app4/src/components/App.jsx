import { useState } from 'react';
import './App.css';
import Dogs from './Dogs';


function App() {
  const [ShowDogs, setShowDogs] = useState(false);

  const showT = (bool) => {
    if (bool) {
      return <Dogs />;
    };
    
    return;
  };

  return (
    <div className="App">
      <button type="button" onClick={() => setShowDogs(!ShowDogs)}>Cick on me

      </button>
      
        { showT(ShowDogs) }
    </div>
  );
}

export default App;
