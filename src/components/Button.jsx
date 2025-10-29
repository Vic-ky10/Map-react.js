const Button =() =>{
    const handle=()=>{
        return (alert("clicked the message"))
    }

   return  <button onClick={handle} >click</button>
}

const Appss=()=>{

    return (
        <Button  />
    )
}
export default Appss