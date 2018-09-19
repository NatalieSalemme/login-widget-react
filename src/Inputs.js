import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

export class Inputs extends React.Component {
  render() {
    return (
    <div className="input-container">
      <label>Username:
      <input id="username" type="text" placeholder="Username"/>
    </label>
    <label>Password:
      <input id="password" placeholder="Password" type="password" />
    </label>
    <a href="#" id="forgot">Forgot Password?</a>
    </div>
    );
  }
}
// export default Inputs;
