import React from 'react'
import { data } from './Parent'
import { useContext } from 'react'

const C = () => {
 const name = useContext(data)
  return (
    <div>
      <h1>IN SOUNTH INDIA BEUTIFUL CITY IS {name} </h1>
    </div>
  )
}

export default C
