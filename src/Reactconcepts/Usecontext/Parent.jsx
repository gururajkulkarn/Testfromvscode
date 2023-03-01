import React, { createContext } from "react";
import A from "./A";
const data = createContext();

const Parent = () => {
  const name = "HYDERABAD";
  return (
    <>
      <data.Provider value={name}>
        <A />
      </data.Provider>
    </>
  );
};

export default Parent;
export { data };
