import React from 'react'
import Callback from './Reactconcepts/Usecallback'
import B from './Reactconcepts/Usecontext/B'
import Parent from './Reactconcepts/Usecontext/Parent'
import Api from './Reactconcepts/Useeffect'
import Usereducer from './Reactconcepts/Usereducer'
import Focus from './Reactconcepts/Useref'
import Usestate from './Reactconcepts/Usestate'

const Main = () => {
  return (
    <div>
      <h1>react topics</h1>

      <Callback/>
      <Focus/>
      <Usereducer/>
      <Usestate/>
      <Api/>
      <Parent/>
      <B/>

    </div>
  )
}

export default Main
