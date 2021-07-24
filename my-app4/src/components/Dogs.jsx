import { useEffect, useState } from 'react';
import './Dogs.css';
import axios from 'axios';


function Dogs() {
  const [showDogsImg, setshowDogsImg] = useState(null);

  useEffect(() => {
    axios.get('https://dog.ceo/api/breeds/image/random').then(r => {
      console.log(r);
      setshowDogsImg(r.data.message);
    })
  })

  return (
    <div className="Dogs">
       <img src={showDogsImg} alt=""></img>
    </div>
  );
}

export default Dogs;
