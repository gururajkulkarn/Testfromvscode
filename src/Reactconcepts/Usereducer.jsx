import React from "react";
import { useReducer } from "react";

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "INCRE":
      return state + 1;
    case "DECRE":
      return state - 1;
    default:
      return state;
  }
};
const Usereducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <p>{state}</p>
      <button onClick={() => dispatch("INCRE")}>incre</button>
      <button onClick={() => dispatch("DECRE")}>decre</button>
    </>
  );
};

export default Usereducer;
