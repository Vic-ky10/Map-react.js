import React, { useState } from 'react'

function RandomNumber() {
    const [random ,setRandom] =useState (() => 
        Math.floor(Math.random() * 100 )
    )
    const randoms =() =>{
      const randome = Math.floor(Math.random() * 100)
    setRandom(randome)
    }
  return (
    <>
    <div>Randomnumber : {random}
   
    </div>
    <div>
         <button onClick={randoms}>generate</button>
    </div>
    </>
  )
}

export default RandomNumber