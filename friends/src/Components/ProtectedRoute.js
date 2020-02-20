import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import UserPage from './User/UserPage'

const ProtectedRoute = ({component: UserPage, ...props}) => {
  
    return(
        <Route
            {...props}
            render={() => {
            if (localStorage.getItem('token')){
                return <UserPage/>;
            } else {
                return <Redirect to='/' />
            }
            }}
        />
    );
};

export default ProtectedRoute