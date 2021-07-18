import './Neighbours.css';

function Neighbours({ neighbourPrev, neighbourNext }) {
  return (
    <div className="Neighbours">
      <strong>Neighbours</strong>: <br></br>
      Previous - {neighbourPrev} <br></br>
      Next - {neighbourNext}
    </div>
  );
}

export default Neighbours;
