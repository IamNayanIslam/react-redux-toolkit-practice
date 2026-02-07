import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  decrementByValue,
  increment,
  incrementByValue,
  reset,
} from "./CounterSlice";
import { useState } from "react";

const CounterComponent = () => {
  const [statusColor, setStatusColor] = useState("text-gray-950");

  const triggerColor = (colorClass) => {
    setStatusColor(colorClass);
    setTimeout(() => {
      setStatusColor("text-gray-950");
    }, 300);
  };

  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
    triggerColor("text-green-600");
  };

  const handleIncrementByValue = () => {
    dispatch(incrementByValue(5));
    triggerColor("text-green-600");
  };

  const handleDecrement = () => {
    count > 0 && dispatch(decrement());
    count > 0 && triggerColor("text-amber-600");
  };

  const handleDecrementByValue = () => {
    count > 0 && dispatch(decrementByValue(5));
    count > 0 && triggerColor("text-amber-600");
  };

  const handleReset = () => {
    count > 0 && dispatch(reset());
    count > 0 && triggerColor("text-red-600");
  };
  return (
    <div className="flex flex-col items-center gap-2">
      <h3 className={`text-2xl py-4 ${statusColor}`}>Count: {count}</h3>
      <div className="flex gap-4">
        <button
          className="px-4 py-2 border rounded-md border-green-600 text-green-600 transition-all duration-300 hover:bg-green-600 hover:text-white"
          onClick={handleIncrement}
        >
          Increment
        </button>
        <button
          className="px-4 py-2 border rounded-md border-amber-600 text-amber-600 transition-all duration-300 hover:bg-amber-600 hover:text-white"
          onClick={handleDecrement}
        >
          Decrement
        </button>
        <button
          className="px-4 py-2 border rounded-md border-red-600 text-red-600 transition-all duration-300 hover:bg-red-600 hover:text-white"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
      <div className="flex gap-4">
        <button
          className="px-4 py-2 border rounded-md border-green-600 text-green-600 transition-all duration-300 hover:bg-green-600 hover:text-white"
          onClick={handleIncrementByValue}
        >
          Increment by Value
        </button>
        <button
          className="px-4 py-2 border rounded-md border-amber-600 text-amber-600 transition-all duration-300 hover:bg-amber-600 hover:text-white"
          onClick={handleDecrementByValue}
        >
          Decrement by Value
        </button>
      </div>
    </div>
  );
};

export default CounterComponent;
