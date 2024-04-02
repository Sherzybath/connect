const Popup = ({ zindex, win }) => {
  return (
    <div className="Final" style={{ zIndex: zindex }}>
      <h1>{win} is the winner</h1>
    </div>
  );
};

export default Popup;
