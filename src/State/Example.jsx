
import React, { useEffect, useState } from 'react';

function Example() {
  const [name, setName] = useState(() => {
    const savedName = localStorage.getItem("name");
    return savedName ? JSON.parse(savedName) : "";
  });

  useEffect(() => {
    localStorage.setItem("name", JSON.stringify(name));
  }, [name]);

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleClick = () => setName("");

  return (
    <div>
      <h1>Enter your Name:{name}</h1>
      <input 
        type="text" 
        placeholder="enter your name" 
        value={name}
        onChange={handleChange} 
      />
      <button onClick={handleClick}>Clear</button>
    </div>
  );
}

export default Example;
