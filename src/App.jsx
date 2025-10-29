
function Cart() {

    const items = [ 'cup','laptop','iphone', 'pc','ps5','xbox']
  
 
  return (
  
  <main>
           <h1>Cart</h1>
   <h2>
     {items.length > 0  && <h2> you have {items.length} in your Cart</h2>}
   </h2>
     <h2>Products</h2>
     
      {items.map(map =>(
          <ul>
            <li key={Math.random()}> {map}</li>
          </ul>
      ))}
  </main>

 
  )
}

function App(){

return(

    
<Cart />

)
}

export default App;