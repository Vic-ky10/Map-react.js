import React, { useState } from 'react'

function State() {

const [friend, setFriend] = useState(["siva", " sakthi "])

const increment = () => setFriend([...friend, "vicky"])
// const decreament =() => setFriend(friend.filter((f) => f!== "siva" ))
const decreament = () => setFriend(friend.filter((f) => f !== "siva"));
const update = () => setFriend(friend.map(f => f === "vicky" ? "vigneshWaran" : f  ) )

return (
<section>
    {friend.map((f,index) => (

        <li key={index}>{f}</li>

    ))}
    <button onClick={increment}>increase</button>
    <button onClick={decreament}> decrease </button>
      <button onClick={update}> update </button>


</section>
)
}

export default State