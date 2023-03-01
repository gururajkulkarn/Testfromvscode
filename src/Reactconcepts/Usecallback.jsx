import React from 'react'
import { useState,useCallback } from 'react';
import Test from './Test';
const Usecallback = () => {

const[count,setCount] = useState(0);

const Members = useCallback(()=>{

},[])

  return (
    <>
<p>{count}</p>
<button onClick={()=>setCount(count+1)}>increment</button>

<Test Members={Members}/>
    </>
  )
}

export default Usecallback
