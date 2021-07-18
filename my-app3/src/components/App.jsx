import './App.css';
import Scroll from './Scroll';
import Current from './Current';
import Neighbours from './Neighbours';
import colorsObj from './css-color-names.json'
import { useState } from 'react';

function App() {

  const colorsArr = Object.values(colorsObj).sort();  //Array with Sorting by color name of css-colos.names.json
  const colorObjSorted = { ...colorsArr };  // Object with keys = index, values = colors

  const getColorName = (colorCode) => {
    return Object.keys(colorsObj).find(key => colorsObj[key] === colorCode)
  }

  const [color, setColor] = useState([]);

  return (
    <div className="App">
      <Scroll maxCount={colorsArr.length} current={(index) => setColor([colorObjSorted[index - 1], colorObjSorted[index], colorObjSorted[index + 1]])}/>
      <Current curr={color[1]}/>
      <Neighbours neighbourPrev={color[0]} neighbourNext={color[2]} namePrev={getColorName(color[0])} nameNext={getColorName(color[2])}/>
    </div>
  );
}

export default App;
