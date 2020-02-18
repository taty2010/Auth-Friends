import React, {useState, useEffect} from 'react';
import {axiosWithAuth} from '../axiosWithAuth';
import Friends from './Friends';
import CreateFriend from './CreateFriend'

import {addFriends, getFriends} from '../User/actions/action';
import {connect} from 'react-redux';
import styled from 'styled-components';

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

    const Wrapper = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    h1{
        color: white;
    }
    `

    const FriendsWrapper = styled.div`
        // background-color: pink;
        width: 95vw;
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-items: center;
    `


    return(
        <Wrapper className='addFriends'>
            <CreateFriend newFriends={newFriends} handleChanges={handleChanges} addNewFriends={addNewFriends} list={friends}/>
            <h1>Friends List</h1>
            <FriendsWrapper>
            {props.isFetchingData ? (
                <h1>LOADING!!!!</h1>
            ) : (
                props.friends.map(list => {
                return <Friends friend={list} />
            })
            )
            }
            </FriendsWrapper>
        </Wrapper>
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