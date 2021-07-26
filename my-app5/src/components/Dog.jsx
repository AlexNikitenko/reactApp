import axios from 'axios';
import { useEffect, useState } from 'react';

function Dog() {
  const [showDogsImg, setshowDogsImg] = useState(null);

  useEffect(() => {
    axios.get('https://dog.ceo/api/breeds/image/random').then(r => {
      console.log(r);
      setshowDogsImg(r.data.message);
    })
  }, [])

  return (
    <div className="dogs">
        <img src={showDogsImg} alt=""></img>
        
    </div>
  );

 
}

export default Dog;