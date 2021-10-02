import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';


type SignInProps ={
    token: string,
    updateToken(newToken: string) : void,
    updateRole(newRole: boolean) : void
};

type SignInState = {
    // token: string,
    username: string,
    password: string,
    redirectToHomepage: boolean
    role: boolean
};

    class SignIn extends Component<SignInProps, SignInState> {
        constructor(props: SignInProps){
            super(props)
            this.state ={            
                // token: props.token,
                username: '',
                password: '',
                redirectToHomepage: false,
                role: false
        }
    }

        handleSubmit = (event: React.FormEvent) => {
            event.preventDefault();
            fetch('http://localhost:3001/user/login', {
                method:'POST',
                body: JSON.stringify({
                    user: {
                        username: this.state.username,
                        password: this.state.password,
                        role: true
                    }
                }),
                headers: new Headers({
                    'Content-Type': 'application/json'
                })            
            }).then(
                (response) => response.json()
            ).then((data) => {
                this.props.updateToken(data.sessionToken)
                this.props.updateRole(data.user.role)
                console.log(data.user.role)
                this.setState({redirectToHomepage: true, role: data.user.role})
            })
            .catch(err => {
                console.log(err)
            })
            // console.log(this.props.updateRole(role))
        }
        
        

render() {
    let redirectHome = this.state.redirectToHomepage
    if (redirectHome) {
        if (this.state.role)
            return (<Redirect to="/home/admin" />)
        else
            return (<Redirect to="/home/user" />)
    }
    return (
    <div>
        <Form onSubmit={this.handleSubmit}>
           
                <Form.Group className="mb-3" controlId="Username">
                    <Form.Label></Form.Label>
                    <Form.Control type="username" placeholder="Enter Username" value={this.state.username} onChange={(e) => this.setState({username:e.target.value})} />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="Password">
                    <Form.Label></Form.Label>
                    <Form.Control type="password" placeholder="Password" value={this.state.password} onChange={(e) => this.setState({password:e.target.value})} />
                </Form.Group>
                <Button variant="primary" type="submit">               
                    Submit
                </Button>
                
            </Form>
    </div>
  );
}
}


export default SignIn;