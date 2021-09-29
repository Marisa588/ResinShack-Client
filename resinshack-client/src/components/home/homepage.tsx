import React, { Component } from 'react';
//import './bootstrap.min.css';
import Admin from './admin';
import User from './user';
import { Redirect } from 'react-router-dom'


type Props ={
    token: string,
    updateToken(newToken: string) : void,
};

type State = {
    user: {
    username: string,
    password: string,
    role: boolean
    }
};

class Home extends Component<Props, State> {
     constructor(props: Props){
        super(props)
        this.state ={
        user: {
            username: '',
            password: '',
            role: false
            
        }
    }
}

    render() {
        if (this.state.user.role === true)  {
            return <Redirect to= '/admin' />}
            else if (this.state.user.role) {
                <Redirect to = '/user'/>
            }

        //if (this.state.user.role === true)  {
                    // return <Redirect to= '/admin'/>}
                    // else if (this.state.user.role) {
                    //     <Redirect to ='/user'/>
                    // }
        return (
            <div>
                {localStorage.getItem('admin') === "true" ? 
                <Admin token={this.props.token}/>
                : "" }
                <User />
                
            {/* <Container>
            
            </Container> */}
            </div>
        )
    }
}

export default Home