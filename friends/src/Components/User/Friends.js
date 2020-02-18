import React from 'react';

const Friends = ({friend}) =>{
    

return(
    <div>
        <h1>Name: {friend.name}</h1>
        <h2>Age: {friend.age}</h2>
        <h3>Email: {friend.email}</h3>
    </div>
    )
}

export default Friends