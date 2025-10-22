

function App(){
  
     const myName = "vicky"
     const age = 22;
     const multiply = (a,b) => a*b;


    return (
    <>
    
        <h1>{myName}</h1>
     <p>My Age :{age}</p>

     <p> a * b = { multiply(2,5)}</p>

 
   

    </>
    )
}

export default App;