import logo from './logo.svg';
import './App.css';
import React from 'react';
import Login from './Screen/Login';
import Register from './Screen/Register';
import Dashboard from './Screen/Dashboard';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
{/* 
      <Login/> */}
      <Switch>
        <Route exact path="/" ><Dashboard /></Route>
        <Route exact path="/dashboard" ><Dashboard /></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/register" component={Register}></Route>
      </Switch>

    </div>
  );
}

export default App;
