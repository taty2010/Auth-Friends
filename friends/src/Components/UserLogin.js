import React, {useState} from 'react';
import {axiosWithAuth} from './axiosWithAuth';


const UserLogin = (props) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
     const [credentials, setCredentials] = useState({
        username: username,
        password: password
     })

     console.log('history', props)
    const handleChanges = e => {
        setCredentials({...credentials, [e.target.name]:e.target.value})
    }
    console.log('username', credentials.username)
    console.log('password', password)

    const login = e => {
        e.preventDefault()
        axiosWithAuth()
            .post('/login', credentials)
            .then(res => {
                localStorage.setItem('token', res.data.payload)
                 props.history.push('/protected');
            })
            .catch(err => {
                localStorage.removeItem('token');
                console.log('invalid Login',err)
            })
    };

    return(
        <div>
            <form onSubmit={login}>
                <input
                    type='text'
                    name='username'
                    value={credentials.username}
                    onChange={handleChanges}
                />
                <input
                    type='password'
                    name='password'
                    value={credentials.password}
                    onChange={handleChanges}
                />
                <button>Login</button>
            </form>
        </div>)
}

export default UserLogin