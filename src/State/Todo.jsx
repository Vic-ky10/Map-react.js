import React, { useState } from 'react'

function Todo() {
    const [todo, setTodo] = useState([])
    const [inputvalue, setInputvalue] = useState('')


    const handleChange = (e) => {
        setInputvalue(e.target.value)
    }
    const clicked = () => {
        setTodo([...todo, inputvalue]);
        setInputvalue('');
    };


    return (
        <div>
            <>
                <h1>Todolist</h1>

                <input type="text" value={inputvalue} onChange={handleChange} placeholder='Add a new todo' />
                <button onClick={clicked}> Add todo </button>
                <ul>
                    <ul>
                        {todo.map((m, index) => <li key={index}>{m}</li>)}
                    </ul>
                </ul>
            </>
        </div>
    )
}

export default Todo