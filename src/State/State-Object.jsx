import React, { useState } from 'react'

function Movie() {

    const [movie,setMovie] =useState({
        title : "kanguva" ,
        rating : 8 ,
        actor :"Suriya",
        director : " "
    
    })
     const directors =() => {setMovie({...movie ,director :"siva"})}

  return (
  <section>
       <h1>Title :{movie.title}</h1>
       <h2>Actor :{movie.actor}</h2>
       <h3>director:{movie.director}</h3>
       <p>Rating :{movie.rating}</p>
       

       <button onClick={directors}> Update</button>
  </section>
  )
}

export default Movie