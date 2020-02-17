import React, {useState, useEffect} from 'react';
import {axiosWithAuth} from '../axiosWithAuth';
import Friends from './Friends';

const FriendsList = () => {

    const [friends, setFriends] = useState([])

    useEffect(() => {
        axiosWithAuth()
            .get('/friends')
            .then(res => {
                console.log('res', res.data)
                setFriends(res.data)
            })
            .catch(err => console.log(err))
    }, []);




    return(
        <div>
            <h1>Friends List</h1>
            {friends.map(list => {
                return <Friends friend={list} />
            })

            }
        </div>
    )
}

export default FriendsList