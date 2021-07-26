import axios from 'axios';
import { useEffect, useState } from 'react';

function Cat() {
  const [showCatsImg, setshowCatsImg] = useState(null);

  useEffect(() => {
    axios.get('https://api.thecatapi.com/v1/images/search').then(r => {
      console.log(r.data[0].url);
      setshowCatsImg(r.data[0].url);
    })
  }, [])

  return (
    <div className="cats">
        <img src={showCatsImg} alt=""></img>
    </div>
  );

 
}

export default Cat;