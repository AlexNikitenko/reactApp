import './Current.css';

function Current({ curr }) {
  return (
    <div className="Current">
      <strong>Current Color:</strong> {curr}
    </div>
  );
}

export default Current;
