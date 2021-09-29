import React, { Component, ReactElement } from "react";
import "./App.css";
// import 'bootswatch/dist/quartz/bootstrap.min.css';
import Landing from "./components/landing/landing";
import Home from "./components/home/homepage";
import Admin from "./components/home/admin";
import User from './components/home/user';
import { Route, Switch, Redirect, Link } from "react-router-dom";
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
    return this.state.sessionRole === true ? comp : <Redirect to = "/" />
  }

  render() {
    return (
      <div className="App">
        {/* <Link to="/home">Home</Link>
        <Link to="/home/admin">Admin</Link> */}
        <Switch>
          <Route exact path="/">
            <Landing token={this.state.sessionToken} updateToken={this.updateToken} updateRole={this.updateRole}/>
          </Route>
          <Route path="/home">
            {this.ifAuthenticated(<Home token={this.state.sessionToken} />)}
          </Route>
          <Route exact path="/home/admin">
            {this.ifAdmin(this.ifAuthenticated(<Admin token={this.state.sessionToken} />))}
          </Route>
          <Route exact path="/home/user">
          {this.ifAuthenticated(<User token={this.state.sessionToken} />)}
          </Route>
          <Route path="/products">
            <Products/>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
