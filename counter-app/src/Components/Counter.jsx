import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  decrementByValue,
  increment,
  incrementByValue,
  reset,
} from "../Services/Actions/CounterActions";
import { useState } from "react";

const Counter = () => {
  const dynamicValue = 3;
  const [statusColor, setStatusColor] = useState("text-cyan-600");
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const triggerColor = (colorClass) => {
    setStatusColor(colorClass);
    setTimeout(() => {
      setStatusColor("text-cyan-600");
    }, 300);
  };

  const handleIncrement = () => {
    dispatch(increment());
    triggerColor("text-green-600");
  };

  const handleDecrement = () => {
    count > 0 && dispatch(decrement());
    triggerColor("text-amber-500");
  };

  const handleReset = () => {
    dispatch(reset());
    triggerColor("text-red-600");
  };

  const handleIncrementByValue = () => {
    dispatch(incrementByValue(dynamicValue));
    triggerColor("text-green-600");
  };

  const handleDecrementByValue = () => {
    count > 0 && dispatch(decrementByValue(dynamicValue));
    triggerColor("text-amber-500");
  };

  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <h1 className="text-2xl">Counter App</h1>

      <h3
        className={`text-2xl font-bold transion-colors duration-300 ${statusColor}`}
      >
        Count: {count}
      </h3>
      <div className="flex gap-2 justify-center">
        <button
          onClick={handleIncrement}
          className="py-2 px-4 border border-green-600 text-green-600 bg-white rounded-md duration-300 hover:bg-green-600 hover:text-white"
        >
          Increment
        </button>
        <button
          onClick={handleDecrement}
          className="py-2 px-4 border border-amber-500 text-amber-500 bg-white rounded-md duration-300 hover:bg-amber-500 hover:text-white"
        >
          Decrement
        </button>
        <button
          onClick={handleReset}
          className="py-2 px-4 border border-red-600 text-red-600 bg-white rounded-md duration-300 hover:bg-red-600 hover:text-white"
        >
          Reset
        </button>
      </div>
      <div className="flex gap-2 justify-center">
        <button
          onClick={handleIncrementByValue}
          className="py-2 px-4 border border-green-600 text-green-600 bg-white rounded-md duration-300 hover:bg-green-600 hover:text-white"
        >
          Increment By {dynamicValue}
        </button>
        <button
          onClick={handleDecrementByValue}
          className="py-2 px-4 border border-amber-500 text-amber-500 bg-white rounded-md duration-300 hover:bg-amber-500 hover:text-white"
        >
          Decrement By {dynamicValue}
        </button>
      </div>
    </div>
  );
};

export default Counter;
