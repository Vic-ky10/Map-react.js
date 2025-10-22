

function UserList(){
    const user = [
        { id: 1, name: "vicky" , age : 22},
         { id: 2, name: "aravi" , age : 22},
          { id: 3, name: "siva" , age : 27},
        ]

       return (
            <div>
                 {user.map((use)=> (

                  <div key={use.id}>
                    <h1>{use.name}</h1>
                    <h1>{use.age}</h1> 
                     </div>
                
       ) )}
            </div>
          
       )
    }

    export default UserList

