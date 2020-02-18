import React, {useState, useEffect} from 'react';

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

    return(
        <div>
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
                <button>Add Friend</button>
            </form>
        </div>
    )
}

export default CreateFriend
