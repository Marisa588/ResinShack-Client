import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

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

    class SignIn extends Component<Props, State> {
        constructor(props: Props){
            super(props)
            this.state ={
            user: {
                username: '',
                password: '',
                role: true
                
            }
        }
    }

        handleSubmit = (event: React.FormEvent) => {
            event.preventDefault();
            fetch('http://localhost:3001/user/login', {
                method:'POST',
                body: JSON.stringify({
                    user: {
                        username:'',
                        password:'',
                        role: ''
                    }
                }),
                headers: new Headers({
                    'Content-Type': 'application/json'
                })            
            }).then(
                (response) => response.json()
            ).then((data) => {
                this.props.updateToken(data.sessionToken)
            })
            .catch(err => {
                console.log(err)
            })
        }


render() {
    // if (this.state.user.role === true)  {
    //     return <Redirect to= '/home/admin'/>}
    //     else if (this.state.user.role) {
    //         <Redirect to ='/home/user'/>
    //     }
  return (
    <div>
        <Form onSubmit={this.handleSubmit}>
            <h3>Sign In</h3>
                <Form.Group className="mb-3" controlId="formBasicUsername">
                    <Form.Label></Form.Label>
                    <Form.Control type="username" placeholder="Enter Username" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label></Form.Label>
                    <Form.Control type="password" placeholder="Password" />
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