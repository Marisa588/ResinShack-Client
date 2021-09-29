import React, { Component} from 'react';
// import './bootstrap.min.css';
import Header from './admin-header';
import logo from '../../assets/logo.jpg';



type Props = {
    token: string,
    // updateToken(newToken: string): void,
}

type State = {
    user:{
        username: string,
        password: string,
        sessionToken: string,
        role: boolean
    }
}
class Admin extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            user: {
                username: '',
                password: '',
                sessionToken:'',
                role: true
                }
            }

        }    
        
    render() {
        return (
            <div>
                <Header token={this.props.token} />
                <br/>
                <br/>
            <h3><img alt="logo" src={logo}></img></h3>
            
            </div>
        )
    }
}


export default Admin;