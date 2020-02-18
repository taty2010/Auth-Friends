import React, {useState, useEffect} from 'react';
import {axiosWithAuth} from '../axiosWithAuth';
import Friends from './Friends';
import CreateFriend from './CreateFriend'

import {addFriends, getFriends} from '../User/actions/action';
import {connect} from 'react-redux';

const FriendsList = (props) => {

    const [friends, setFriends] = useState([])
    const [newFriends, setNewFriends] = useState({
        name: '',
        age: '',
        email: ''
    })
    const [isFetching, setIsFetching] = useState(false)

    useEffect(() => {
        props.getFriends()
        // axiosWithAuth()
        //     .get('/friends', setIsFetching(true))
        //     .then(res => {
        //         console.log('res', res.data)
        //         setIsFetching(false)
        //         setFriends(res.data)
        //     })
        //     .catch(err => console.log(err))
    }, []);

    const addNewFriends = e => {
        e.preventDefault();
        props.addFriends(newFriends)
    }

    const handleChanges = e => {
        setNewFriends({...newFriends, [e.target.name]:e.target.value})
    }


    return(
        <div>
            <CreateFriend newFriends={newFriends} handleChanges={handleChanges} addNewFriends={addNewFriends} list={friends}/>
            <h1>Friends List</h1>
            {props.isFetchingData ? (
                <h1>LOADING!!!!</h1>
            ) : (props.friends.map(list => {
                return <Friends friend={list} />
            })
            )
            }
        </div>
    )
}

const mapStateToProps = state => {
    console.log('mapstatetoprops', state)
    return{
        friends: state.friends,
        error: state.error,
        isFetchingData: state.isFetchingData
    }
}

export default connect (
    mapStateToProps,
    {addFriends, getFriends}
)(FriendsList);