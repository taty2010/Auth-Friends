import React, {useState, useEffect} from 'react';

import styled from 'styled-components'

const CreateFriend = (props) => {

    // const [friends, setFriends] = ({
    //     name: name,
    //     age: age,
    //     email: email,
    //     id: new Date()
    // })

    // const handleChanges = () => {
    //     setFriends({...friends, [e.target.name]: e.target.value})
    // }

    // const addFriend = e => {
    //     e.preventDefault()
    //     axiosWithAuth()
    //         .post('/friends', friends)
    //         .then(res => {

    //         })
    // }

    const Button = styled.button`
        border-radius: 25px;
        padding: 1%;
        background-image: linear-gradient(45deg, #9e678e, #78bee2);
        color: white;
        border: none;
        font-family: 'Fredoka One', cursive;
        border: 1px solid white;
        margin: 0 auto;

    `;

    const Wrapper = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
    `;

    return(
        <Wrapper className='createForm'>
            <form onSubmit={props.addNewFriends}>
                <input
                    name='name'
                    type='text'
                    placeholder='Name'
                    onChange={props.handleChanges}
                    value={props.newFriends.name}
                />
                <input
                    name='age'
                    type='text'
                    placeholder='Age'
                    onChange={props.handleChanges}
                    value={props.newFriends.age}
                />
                <input
                    name='email'
                    type='email'
                    placeholder='Email'
                    onChange={props.handleChanges}
                    value={props.newFriends.email}
                />
                <Button>Add Friend</Button>
            </form>
        </Wrapper>
    )
}

export default CreateFriend
