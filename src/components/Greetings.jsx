

function Greetings() {

    const name = " vicky "
    const newDate = new Date()
   
  return (
    <center>
      <h1> Name : {name}</h1>
        <h2> Today : {newDate.getDate()}</h2>
    </center>
        
       
    
  )
}

export default Greetings