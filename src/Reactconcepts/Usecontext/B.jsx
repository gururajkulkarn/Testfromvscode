import React from 'react'
import C from './C'
import styled from "styled-components";


const B = () => {
  const H1 = styled.h1`
  color: green;
  background-color:red;
 
`;

const Button = styled.button`
color:red;
border:3px solid green;
width:150px;
`
  return (
    <div>
      <C/>
      <H1>hello world</H1>
      <Button>click</Button>
    </div>
  )
}

export default B
