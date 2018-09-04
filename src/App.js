import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AllUsersComponent from './AllUsersComponent';
import EditUserComponent from './EditUserComponent';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          < img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to users crud</h1>
        </header>
        <AllUsersComponent/>
        <EditUserComponent
         />
      </div>
    );
  }
}

export default App;
