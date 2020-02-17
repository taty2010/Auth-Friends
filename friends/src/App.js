import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserLogin from './Components/UserLogin';

import {Link, Route, Switch} from 'react-router-dom';
import Public from './Components/Public';
import ProtectedRoute from './Components/ProtectedRoute';
import UserPage from './Components/User/UserPage'

function App() {
  return (
    <div className="App">
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/protected'>Profile</Link>
      </nav>
      <Switch>
      <Route exact path='/' component={Public} />
      <Route path='/login' component={UserLogin} />
      <ProtectedRoute exact path='/protected' component={UserPage}/>
      </Switch>
    </div>
  );
}

export default App;
