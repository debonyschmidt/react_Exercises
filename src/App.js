import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username: "Debony"
  };

  updateNameEventHandler = (event) => {
    this.setState({
      username: event.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <p>Enter/ Edit name:</p>
        <UserInput onchange = {this.updateNameEventHandler} name = {this.state.username}/>
        <UserOutput name = {this.state.username} />
      </div>
    );
  }
}

export default App;
