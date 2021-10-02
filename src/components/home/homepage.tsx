import { Component } from "react";
import Admin from './admin';
import User from './user';



type HomeProps = {
  token: string,
  role: boolean,
  updateToken(newToken: string): void,
};

type HomeState = {
  sessionRole: boolean;
  sessionToken: string;
  redirectToHome: boolean

};

class Home extends Component<HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props);
    this.state = {
      sessionRole: false,
      sessionToken: "",
      redirectToHome: false,
    };
  }
  render() {
  
    
    return(
      <div>
      {localStorage.getItem("role") === "true" ? (
         <Admin token={this.state.sessionToken} role = {this.state.sessionRole} /> 
      ) : <User token={this.state.sessionToken} role = {this.state.sessionRole} /> }
     
      
      
      
       
       </div>
    )
  }
}

export default Home;
