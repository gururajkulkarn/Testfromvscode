import React from "react";
import styled from "styled-components";
import { useRef, useEffect } from "react";

const Useref = () => {
  const Input = styled.input`
    color: black;
    background-color: white;
    border: 2px solid green;
    border-radius: 10px;
    padding: 10px;
    width:300px;
  `;

  const Button = styled.button`
    background-color: green;
    padding: 5px;
    width: 100px;
    height: 50px;
    border-radius: 20px;
    border: 2px solid red;
    color: white;
    font-size: 20px;
  `;

  const inputref = useRef();

  useEffect(() => {
    inputref.current.focus();
  }, []);

  return (
    <>
      <div className="m-3">
        <Input className="m-3" type="text" ref={inputref} />
        <br />
        <Input className="m-3" type="text" />
        <br />

        <Input className="m-3" type="text" />
        <br />
        <Input className="m-3" type="text" />
        <br />

        <Button>Submit</Button>
      </div>
    </>
  );
};

export default Useref;
