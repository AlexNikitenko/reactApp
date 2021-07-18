import './Current.css';

function Current({ curr }) {
  return (
    <div className="Current">
      <div className="colorName">
        <strong>Current Color:</strong> {curr}
      </div>
      <div className="icon" style={{ backgroundColor: curr }}></div>
    </div>
  );
}

export default Current;
