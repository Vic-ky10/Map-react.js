import React, { useState } from 'react'

function States() {

    const [movies, setMovies] = useState([
        { id: 1, title: "spiderman" },
        { id: 2, title: "spiderman 2" }
    ])

    const handle = () => {
 
        // setMovies(movies.map(m => m.id ===1 ? {...movies, title: "kanguva"} : m));
        setMovies(movies.map(m => m.id === 1 ? { ...m, title: "kanguva" } : m));
    }
    return (
        <section>
         {movies.map((m) => (
    <ul key={m.id}>
        <li>{m.title}</li>
    </ul>
))}

            <button onClick={handle}>update</button>
        </section>
    )
}

export default States