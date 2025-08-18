import { useState } from "react";
import { useCounter } from "./hooks/useCounter";

export const CustomHook = () => {
  const { counter, increment, decrement, reset } = useCounter();

  return (
    <>
      <hr />
      <div>CustomHook {counter}</div>
      <br />
      <button className="btn btn-success" onClick={increment}>
        +1
      </button>
      <button className="btn btn-danger" onClick={reset}>
        Reset
      </button>
      <button className="btn btn-warning" onClick={decrement}>
        -1
      </button>
    </>
  );
};
