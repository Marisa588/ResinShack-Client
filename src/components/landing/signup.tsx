import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Redirect } from "react-router-dom";
import APIURL from "../../helpers/environment";

type SignUpProps = {
  token: string;
  updateToken(newToken: string): void;
  updateRole(newRole: boolean): void;
};

type SignUpState = {
  username: string;
  password: string;
  redirectToHomepage: boolean;
  role: boolean;
};

class SignUp extends Component<SignUpProps, SignUpState> {
  constructor(props: SignUpProps) {
    super(props);
    this.state = {
      username: "",
      password: "",
      role: false,
      redirectToHomepage: false,
    };
  }

  // handleSubmit = async (event: React.FormEvent) => {
  //   event.preventDefault();
  //   let response = await fetch(`${APIURL}/user/register`, {
  //     method: "POST",
  //     body: JSON.stringify({
  //       user: {
  //         username: this.state.username,
  //         password: this.state.password,
  //         role: "",
  //       },
  //     }),
  //     headers: new Headers({
  //       "Content-Type": "application/json",
  //     }),
  //   });
  //   let json = await response.json();
  //   this.props.updateToken(json.sessionToken);
  //   return <Redirect to="/home/" />;
  // };

  handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    fetch(`${APIURL}/user/register`, {
        method:'POST',
        body: JSON.stringify({
            user: {
                username: this.state.username,
                password: this.state.password,
                role: false
            }
        }),
        headers: new Headers({
            'Content-Type': 'application/json'
        })            
    }).then(
        (response) => response.json()
    ).then((data) => {
        this.props.updateToken(data.sessionToken)
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
          <Form.Group className="mb-3" controlId="newUsername">
            <Form.Label></Form.Label>
            <Form.Control
              type="username"
              placeholder="Enter Username"
              value={this.state.username}
              onChange={(e) => this.setState({ username: e.target.value })}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="newPassword">
            <Form.Label></Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={(e) => this.setState({ password: e.target.value })}
            />
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
