import { Component} from 'react';
import UserProducts from './user-products';
import UserSitebar from './user-header';
import 'bootswatch/dist/quartz/bootstrap.min.css';



type Props ={
    token: string,
    updateToken(newToken: string): void,
   role: boolean
};

type State = {
    // user: {
        // username: string,
        // password: string,
        sessionToken: string,
        sessionRole: boolean
    // }
};

class User extends Component<Props, State> {
    constructor(props: any) {
    super(props)
    this.state = {      
      sessionToken: "",
      sessionRole: false
    }
  }


    render() {
        return (
            <div>
                <UserSitebar token={this.state.sessionToken} />
        <div className="landing-cards">
            <UserProducts token={this.state.sessionToken} updateToken={this.props.updateToken} />
                </div>
                </div>
        )
    }
}


export default User;