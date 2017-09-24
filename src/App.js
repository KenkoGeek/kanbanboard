import React, { Component } from 'react';
import {MainBoard} from './Board';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to this example</h2>
        </div>
        <div className="App-container">
        <MainBoard />
        </div>
        <div className="App-footer">
        </div>
      </div>

    );
  }
}

export default App;
