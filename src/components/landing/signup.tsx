import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'



type Props ={
    token: string,
    updateToken(newToken: string) : void,
};

type State = {
    
    username: string,
    password: string,
    role: boolean
    
};

    class SignUp extends Component<Props, State> {
        constructor(props: Props){
            super(props)
            this.state ={
            
                username: '',
                password: '',
                role: true
                
            
        }
    }

        handleSubmit = (event: React.FormEvent) => {
            event.preventDefault();
            fetch('http://localhost:3001/user/register', {
                method:'POST',
                body: JSON.stringify({
                    user: {
                        username: this.state.username,
                        password: this.state.password,
                        // role: ''
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
    //  //     // redirect to specific view
    //     // if (this.props.token !== "") {
    //     //     return <Redirect to='/home/admin' or '/home/user' />
    //     // }
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
                    <Form.Control type="password" placeholder="Password" value={this.state.password} onChange={(e) => this.setState({password:e.target.value})}/>
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