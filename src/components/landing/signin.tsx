import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

type Props ={
    token: string,
    updateToken(newToken: string) : void,
};

type State = {
    
    token: string,
    username: string,
    password: string,
    //role: boolean
    
};

    class SignIn extends Component<Props, State> {
        constructor(props: Props){
            super(props)
            this.state ={
            
                token: props.token,
                username: '',
                password: '',
                //role: true
                
            
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
                        //role: ''
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
    // 
  return (
    <div>
        <Form onSubmit={this.handleSubmit}>
           
                <Form.Group className="mb-3" controlId="formBasicUsername">
                    <Form.Label></Form.Label>
                    <Form.Control type="username" placeholder="Enter Username" value={this.state.username} onChange={(e) => this.setState({username:e.target.value})} />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
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