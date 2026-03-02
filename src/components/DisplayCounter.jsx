import { useSelector } from "react-redux";

const DisplayCounter = () => {
  const { counterVal } = useSelector((store) => store.counter);
  
  return (
    <div>
      <div className="counter-display">{counterVal}</div>
      <p className="lead mb-4 text-muted">Current Counter Value</p>
    </div>
  );
};

export default DisplayCounter;
