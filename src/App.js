import React, { Component } from 'react';
import { Provider } from "react-redux";
import store from "./store";
import logo from './logo.svg';
import './App.css';
import AllUsersComponent from './components/AllUsersComponent';

class App extends Component {
  render() {
    return (
      <Provider store={store}>      
        <div className="App">
          <header className="App-header">
            < img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to users crud</h1>
          </header>
          
          <AllUsersComponent/>
        </div>
      </Provider>
    );
  }
}

export default App;