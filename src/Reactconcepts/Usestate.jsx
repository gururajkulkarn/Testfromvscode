import React from 'react'
import { useState } from 'react';
const Usestate = () => {

  const [count,setCount] = useState(0);
  return (
    <>
      <p>{count}</p>
      <button className='btn btn-danger m-3' onClick={()=>setCount(count+1)}>increment</button>
      {count>=0 ? <button className='btn btn-danger m-3' onClick={()=>setCount(count-1)}>decrement</button> : setCount(0)}

    </>
  )
}

export default Usestate
