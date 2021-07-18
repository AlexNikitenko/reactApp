import './Neighbours.css';

function Neighbours({ neighbourPrev, neighbourNext, namePrev, nameNext }) {
  return (
    <div className="Neighbours">
      <strong>Neighbours</strong>: <br></br>
      Previous - {namePrev} - {neighbourPrev} <br></br>
      Next - {nameNext} - {neighbourNext}
    </div>
  );
}

export default Neighbours;
