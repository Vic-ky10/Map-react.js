import React, { useState } from 'react'

function Profile() {

const [profile, setProfile] = useState({
name: "",
age: "",

})
const handle = (e) => {
   const {name , value} = e.target ;
   setProfile ((preProfile) =>({...preProfile ,[name]:value}))
}
return (
<div>
    <h1>
        profile information
    </h1>
    <div>
        <label > Name :
            <input type="text" name='name' placeholder='enter a your name' value={profile.name} onChange={handle} />
        </label>
    </div>
    <div>
        <label > Age :
            <input type="number" name='age' placeholder='enter a number' value={profile.age} onChange={handle} />
        </label>
    </div>


    <h3> Profile Information  </h3>
        <h4> Name : {profile.name}</h4>
        <h4>Age : {profile.age}</h4>
   
</div>
)
}

export default Profile