import React from 'react';
import './App.css';

export class LogIn extends React.Component {
  render() {
    return (
      <div style={{margin: 'auto'}}>
        <div class="row">
      <input type="checkbox" name="sign-in" class="check-box" />

      <span class="keep-signed-in">Keep me signed in</span>
        <br />
        </div>
    <input type="submit" id="submit" value="Log In" />
    </div>
    );
  }
}
