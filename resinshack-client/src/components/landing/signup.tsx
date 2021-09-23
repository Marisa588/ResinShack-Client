import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'


type Props = {
    token: string,
    updateToken(newToken: string): void,
}

type State = {
    user:{
    username: string,
    password: string,
    }
}

class SignUp extends Component<Props, State> {
   State ={
       user: {
           username: '',
           password: ''
       }
    }
    handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        fetch('http://localhost:3001/user/register', {
            method: 'POST',
            body: JSON.stringify({
                user: {
                    username: '',
                    password: '',
                }
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            this.props.updateToken(data.sessionToken)
        })

        .catch(err => {
            console.error(err)
        })
            
    }  


    render() {
        // redirect to specific view
        // if (this.props.token !== "") {
        //     return <Redirect to='/home/admin' or '/home/user' />
        // }
        return (
          <div>
            <Form onSubmit={this.handleSubmit}>
            <h3>Sign Up</h3>
                <Form.Group className="mb-3" controlId="formBasicUsername">
                    <Form.Label></Form.Label>
                    <Form.Control type="username" placeholder="Enter Username" />
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





export default SignUp;