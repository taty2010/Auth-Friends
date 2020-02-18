import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserLogin from './Components/UserLogin';

import {Link, Route, Switch} from 'react-router-dom';
import Public from './Components/Public';
import ProtectedRoute from './Components/ProtectedRoute';
import UserPage from './Components/User/UserPage';
import {BrowserRouter as Router} from 'react-router-dom'

import styled from 'styled-components';

function App() {

  const Wrapper = styled.div`
        background-image: url('https://images.unsplash.com/photo-1508163223045-1880bc36e222?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80');
        background-position: center;
        background-repeat: no-repeat;
    `

  return (
    <Router>
      <div className="App">
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/protected'>Profile</Link>
        </nav>
        <Switch>
        <Route exact path='/' render={(props) => <Public {...props}/>} />
        <Route path='/login' render={(props) => <UserLogin {...props}/>} />
        <ProtectedRoute exact path='/protected' component={UserPage}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
