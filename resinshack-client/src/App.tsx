import React, { Component } from 'react';
import './App.css';
import './bootstrap.min.css';
import Landing from './components/landing/landing';


type State = {
  sessionToken: string
}



class App extends Component <{}, State> {
  constructor(props: string) {
    super(props)
    this.state = {
      sessionToken: ''
    }
  }

  updateToken = (newToken: string) => {
    localStorage.setItem('token', newToken)
    this.setState({
      sessionToken: newToken
    });
    console.log(this.state.sessionToken)
  }
render(){
  return (
    <div className="App">

    <Landing token={this.state.sessionToken} updateToken={this.updateToken} />

    </div>
  );
}
}

export default App;
