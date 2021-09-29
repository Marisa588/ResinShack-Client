import React, { Component } from 'react';
import './App.css';
import './bootstrap.min.css';
import Landing from './components/landing/landing';
import Home from './components/home/homepage';
import Admin from './components/home/admin';
import User from './components/home/user';
import {Redirect, Route, Switch} from 'react-router-dom';



type State = {
  role: boolean
  sessionToken: string
}



class App extends Component <{}, State> {
  constructor(props: string) {
    super(props)
    this.state = {      
      sessionToken: "",
      role: false
    }
  }

  updateToken = (newToken: string) => {
    localStorage.setItem('token', newToken)
    this.setState({
      sessionToken: newToken
    });
    console.log(this.state.sessionToken)
  }
    clearToken = () => {
      localStorage.clear();
      this.setState({ sessionToken: ""});
      console.log("Token cleared and Logged out");
    };
  updateRole = (newRole: boolean) => {
    // new Boolean(this.state.role).toString()
    localStorage.setItem('role', newRole.toString());
    console.log(newRole);
    this.setState({
      role: newRole
    })
    console.log(newRole)
  }

  protectectViews = () => {
    return (localStorage.getItem('role')? <Admin token={this.state.sessionToken}/> : <User/>)
  }
render(){
  if (localStorage.getItem("role") === "true")  {
            return <Redirect to= '/admin'/>}
            else {
                <Redirect to ='/user'/>
            }
  return (
    <div className="App">
      {/* <Landing token={this.state.sessionToken} updateToken={this.updateToken} updateRole={this.updateRole}/> */}
      <Switch>
         <Route exact path="/" component={Landing}> 
      <Landing token={this.state.sessionToken} updateToken={this.updateToken} />
        </Route>
      <Home token={this.state.sessionToken} updateToken={this.updateToken} />
        <Route exact path="/home" component={Home}>
        {this.state.sessionToken === localStorage.getItem('token') ?
          <Admin 
           token={this.state.sessionToken}
           /> :  
           <User    
         />} 
         </Route>
      </Switch>


    </div>
  );
}
}

export default App;
