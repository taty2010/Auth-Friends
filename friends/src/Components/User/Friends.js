import React from 'react';

import styled from 'styled-components';

const Friends = ({friend}) =>{

const Block = styled.div`
    width: 30vw;
    height: 40vh;
    background-color: white;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    flex-flow: column;
    justify-content:center;
    align-items:center;
    margin: 2%;
    box-shadow: 5px 5px 3px 1px #3f3b48c9;
    :hover{
        transform: scale(1.2)
    }
    h1{
        color: gray;
        text-align: center;
    }
    i{
        font-size: 10vw;
        color: #6d9cc1;;
    }
`

const Button = styled.button`
border-radius: 25px;
padding: 2% 5%;
background-image: linear-gradient(45deg, #9e678e, #78bee2);
color: white;
border: none;
font-family: 'Fredoka One', cursive;

`;

return(
    <Block>
        <i class="fab fa-grav"></i>
        <h1>{friend.name}</h1>
        <Button>View Profile</Button>
        {/* <h2>Age: {friend.age}</h2>
        <h3>Email: {friend.email}</h3> */}
    </Block>
    )
}

export default Friends