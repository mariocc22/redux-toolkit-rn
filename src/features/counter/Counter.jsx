import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
} from "./counterSlice.js";
import { useState } from "react";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const [incrementAmount, setIncrementAmount] = useState(0);
  const addValue = Number(incrementAmount) || 0;

  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
  };

  return (
    <section>
      <p style={{ fontSize: 100 }}>{count}</p>
      <div>
        <button
          style={{ fontSize: 50, margin: 10 }}
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <button
          style={{ fontSize: 50, margin: 10 }}
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
      <input
        type="text"
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)}
      />
      <button
        style={{ fontSize: 50, margin: 10 }}
        onClick={() => dispatch(incrementByAmount(addValue))}
      >
        Add Amount
      </button>
      <button style={{ fontSize: 50, margin: 10 }} onClick={resetAll}>
        Reset
      </button>
    </section>
  );
};

export default Counter;
