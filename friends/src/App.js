import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserLogin from './Components/UserLogin';

import {Link, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <UserLogin />
    </div>
  );
}

export default App;
