import React from "react";
import { useDispatch, useSelector } from "react-redux";
import numberSlice, {
  decrement,
  increment,
  incrementByAmount,
} from "../redux/numberSlice";

export default function Numbers() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.numbers.number);
  return (
    <div>
      <h1>Counter: {data}</h1>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decerement
      </button>
      <button
        onClick={() => {
          dispatch(incrementByAmount(7));
        }}
      >
        Increment by 7
      </button>
      <br />
      <br />
      <br />
      <hr />
    </div>
  );
}
