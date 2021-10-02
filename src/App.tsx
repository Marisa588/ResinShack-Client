import React, { Component, ReactElement } from "react";
import "./App.css";
// import 'bootswatch/dist/quartz/bootstrap.min.css';
import Landing from "./components/landing/landing";
import Home from "./components/home/homepage";
import Admin from "./components/home/admin";
import User from './components/home/user';
import Upload from './components/home/admin-upload';
import UserFavorite from './components/home/user-favorite';
import { Route, Switch, Redirect } from "react-router-dom";
import Products from "./components/landing/products";


type State = {
  sessionRole: boolean;
  sessionToken: string;
};

class App extends Component<{} , State> {
  constructor(props: {} ) {
    super(props);
    this.state = {
      sessionToken: "",
      sessionRole: false ,
    };
  }

  componentDidMount() {
    if (localStorage.getItem("token")) {
      this.setState({
        sessionToken: localStorage.getItem("token")!,
      });
    }
    if (localStorage.getItem("role")) {
      this.setState({ 
        sessionRole: Boolean(localStorage.getItem("role")) 
      });
    }
  }

  updateToken = (newToken: string) => {
    localStorage.setItem("token", newToken);
    this.setState({
      sessionToken: newToken,
    });
    console.log(this.state.sessionToken);
  };

  clearToken = () => {
    localStorage.clear();
    this.setState({ sessionToken: "" });
  };

  updateRole = (newRole: boolean) => {
    localStorage.setItem("role", String(newRole));
    this.setState({
      sessionRole: newRole,
    });
  }

  ifAuthenticated = (comp: ReactElement) => {
    return this.state.sessionToken ? comp : <Redirect to="/" />
  }
  ifAdmin = (comp: ReactElement) => {
    return this.state.sessionRole === true ? comp : <Redirect to = "/home/admin" />
  }

  // ifUser = (comp: ReactElement) => {
  //   return this.state.sessionRole === false ? comp : <Redirect to ="/home/user"/>
  // }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Landing token={this.state.sessionToken} updateToken={this.updateToken} updateRole={this.updateRole}/>
          </Route>
          <Route path="/home">
            {this.ifAuthenticated(<Home token={this.state.sessionToken} role={this.state.sessionRole} updateToken={this.updateToken} />)}
          </Route>
          <Route exact path="/home/admin">
            {this.ifAdmin(<Admin token={this.state.sessionToken} role={this.state.sessionRole}/>)}
          </Route>
          <Route exact path="/home/user">
          <User token={this.state.sessionToken} role={this.state.sessionRole} />
          </Route>
          <Route path="/products">
            <Products/>
          </Route>
          <Route path="/admin/upload">
            <Upload token={this.state.sessionToken} updateToken={this.updateToken}/>
          </Route>
          <Route path = "/user/favorite">
            <UserFavorite token={this.state.sessionToken} />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
