import './Scroll.css';

function Scroll({ maxCount, current, getNeighbours }) {
  return (
    <div className="Scroll">
      <input type="range" min="0" max={maxCount - 1} step="1" onChange={(ev) => current(Number(ev.target.value))}></input>
      
    </div>
  );
}

export default Scroll;
