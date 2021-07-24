import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const [showDogsImg, setshowDogsImg] = useState(null);

  useEffect(() => {
    axios.get('https://dog.ceo/api/breeds/image/random').then(r => {
      console.log(r);
      setshowDogsImg(r.data.message);
    })
  }, [])

  const getNewDog = () => {
    axios.get('https://dog.ceo/api/breeds/image/random').then(r => {
      console.log(r);
      setshowDogsImg(r.data.message);
    })
  }

  return (
    <div className="App">
      <button type="button" onClick={() => getNewDog()}>CLICK ON ME</button>
        <img src={showDogsImg} alt=""></img>
    </div>
  );
}

export default App;
