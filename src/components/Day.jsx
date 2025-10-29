import React from 'react'

function Day({isTime}) {
return isTime === "morning" ? (<h1>its morning </h1>) : (<h2>its Afternoon </h2>)
 
 
}

export default Day