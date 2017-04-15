import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Auth from './component/Auth'

class App extends Component {
  constructor(){
    super()
    this.state = {
      authenticated: false
    }
    //handleChangeAuthenticated = () => this.setState ({ authenticated: !this.state.authenticated })
  }
  render() {
    return (
      <div className="App">
        <Auth />
      </div>
    );
  }
}

export default App;
