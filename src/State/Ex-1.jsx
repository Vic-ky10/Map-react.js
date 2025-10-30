import React, { useState } from 'react'

function Intial() {
    const[count,setCount] = useState(()=>{
        const inital = 10 ;
        return inital
    })
    const increament =() => {
        setCount( count+1)
    }

  return (
   <>
       <div>intial</div>
    <h1>{count}</h1>
    <button onClick={increament}>increament</button>
   </>
  )
}

export default Intial 