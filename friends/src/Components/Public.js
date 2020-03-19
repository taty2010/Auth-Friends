import React from 'react';
import UserLogin from './UserLogin'

import styled from 'styled-components'

const Public = (props) => {
console.log('public',props)
    const Wrapper = styled.div`
        // background-image: url('https://images.unsplash.com/photo-1508163223045-1880bc36e222?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80');
        // background-position: center;
        // background-repeat: no-repeat;
        // background-size: cover;
        // background-attachment: fixed;
        // filter: blur(5px);
        display: flex;
        flex-flow: column;
        justify-content: center;
        height: 100vh;
    `
    const Bg = styled.div`
        background-image: linear-gradient(rgba(117, 36, 113, 0.5), rgba(37, 39, 93, 0.5)),url(https://images.unsplash.com/photo-1508163223045-1880bc36e222?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: fixed;
        filter: blur(5px);
        // display: flex;
        // flex-flow: column;
        // justify-content: center;
        height: 100%;
    `
    const Form = styled.div`
        background-color: rgba(236, 145, 145, 0.43);
        color: white;
        border: 1px solid white;
        width: 40vw;
        top: 20%;
        left: 30%;
        height: 60vh;
        position: absolute;
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;

    `

    return(
        <Wrapper>
            <Bg/>
            <Form className='loginWrapper'>
            <i class="fas fa-user-astronaut"></i>
            <h1>Welcome!</h1>
            <p>Please Sign into your profile</p>
            <UserLogin history={props.history}/>
            </Form>
        </Wrapper>
    )
}

export default Public