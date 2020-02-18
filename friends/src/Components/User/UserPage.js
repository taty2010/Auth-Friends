import React from 'react';
import FriendsList from './FriendsList';

import styled from 'styled-components';

const UserPage = () => {
    const Wrapper = styled.div`
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
        background-image: linear-gradient(rgba(255,255,255,0.2),rgba(130, 101, 136, 0.8)),url(https://images.unsplash.com/photo-1523821741446-edb2b68bb7a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80);
        /* background-color: white; */
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: fixed;
    

    `;

    const Header = styled.div `
        background-image: linear-gradient(rgba(255,255,255,0.2), rgba(0,0,0,0.8)), url('https://images.unsplash.com/photo-1519501025264-65ba15a82390?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80');
        width: 95vw;
        height: 50vh;
        margin: 5%;
        border:1px solid #ccc9c9;
        color: white;
        display: flex;
        justify-content: center;
        flex-flow: column;
        align-items: center;
        border-radius: 25px;
        h2{
            font-size: 2.5vw;
        }
        i{
            font-size: 10vw;
        }
    `

    return(
        <Wrapper>
            <Header>
                <i class="fas fa-user-astronaut"></i>
                <h2>Welcome Back!</h2>
            </Header>
            <FriendsList />
        </Wrapper>
    )
}

export default UserPage