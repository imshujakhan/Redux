import { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterActions } from "../store/counter";
import { privacyActions } from "../store/privacy";

const Controls = () => {
  const dispatch = useDispatch();
  const inputElement = useRef();

  const handleIncrement = () => {
    dispatch(counterActions.increment());
  };

  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  };

  const handlePrivacyToggle = () => {
    dispatch(privacyActions.toggle());
  };

  const handleAdd = () => {
    const value = inputElement.current.value;
    if (value && !isNaN(value)) {
      dispatch(counterActions.add(value));
      inputElement.current.value = "";
    }
  };

  const handleSub = () => {
    const value = inputElement.current.value;
    if (value && !isNaN(value)) {
      dispatch(counterActions.subtract(value));
      inputElement.current.value = "";
    }
  };

  const handleReset = () => {
    dispatch(counterActions.reset());
  };

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
        <button
          type="button"
          className="btn btn-primary control-btn"
          onClick={handleIncrement}
          title="Increment by 1"
        >
          +
        </button>
        <button
          type="button"
          className="btn btn-success control-btn"
          onClick={handleDecrement}
          title="Decrement by 1"
        >
          -
        </button>
        <button
          className="btn btn-warning control-btn"
          type="button"
          onClick={handlePrivacyToggle}
          title="Toggle Privacy"
        >
          Privacy
        </button>
      </div>
      
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
        <input
          ref={inputElement}
          type="number"
          placeholder="Enter number"
          className="number-input"
        />
        <button type="button" className="btn btn-info" onClick={handleAdd}>
          Add
        </button>
        <button type="button" className="btn btn-danger" onClick={handleSub}>
          Subtract
        </button>
      </div>

      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
        <button type="button" className="reset-btn" onClick={handleReset}>
          Reset Counter
        </button>
      </div>
    </>
  );
};

export default Controls;
