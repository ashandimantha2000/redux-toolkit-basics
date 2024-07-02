import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import numberSlice, {
  decrement,
  increment,
  incrementByAmount,
} from "../redux/numberSlice";

export default function Numbers() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.numbers.number);
  const inputRef = useRef(null);
  const subtract = () => {
    dispatch(decrement());
  };

  const add = () => {
    dispatch(increment());
  };

  const addbyValue = () => {
    if (!inputRef.current.value) {
      alert("Input a number");
    } else {
      const value = Number(inputRef.current.value);
      dispatch(incrementByAmount(value));
    }
  };

  return (
    <div>
      <h1>Counter: {data}</h1>
      <button onClick={add}>Increment</button>
      <button onClick={subtract}>Decerement</button>
      <input type="number" ref={inputRef} />
      <button onClick={addbyValue}>Increment by Amount</button>
      <br />
      <br />
      <br />
      <hr />
    </div>
  );
}
