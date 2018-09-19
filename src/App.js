import React, { Component } from 'react';
import { Inputs } from './Inputs';
import { LogIn } from './LogIn';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <h2 className="title">Login</h2>
          <Inputs />
          <br />
          <LogIn />
        </div>
      </div>
    );
  }
}

export default App;
