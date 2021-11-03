import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import APIURL from "../../helpers/environment";

type SignInProps = {
  token: string;
  updateToken(newToken: string): void;
  updateRole(newRole: boolean): void;
};

type SignInState = {
  username: string;
  password: string;
  redirectToHomepage: boolean;
  role: boolean;
};

class SignIn extends Component<SignInProps, SignInState> {
  constructor(props: SignInProps) {
    super(props);
    this.state = {
      username: "",
      password: "",
      redirectToHomepage: false,
      role: false,
    };
  }

  handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    fetch(`${APIURL}/user/login`, {
      method: "POST",
      body: JSON.stringify({
        user: {
          username: this.state.username,
          password: this.state.password,
        },
      }),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        this.props.updateToken(data.sessionToken);
        this.props.updateRole(data.user.role);
        console.log(data.user.role);
        this.setState({ redirectToHomepage: true });
      })
      .catch((err) => {
        console.log(err);
      });
    // console.log(this.props.updateRole(role))
  };

  render() {
    let redirectHome = this.state.redirectToHomepage;
    if (redirectHome) {
      if (this.state.role) return <Redirect to="/home/admin" />;
      else return <Redirect to="/home/user" />;
    }
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group className="mb-3" controlId="Username">
            <Form.Label></Form.Label>
            <Form.Control
              type="username"
              placeholder="Enter Username"
              value={this.state.username}
              onChange={(e) => this.setState({ username: e.target.value })}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="Password">
            <Form.Label></Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={(e) => this.setState({ password: e.target.value })}
            />
          </Form.Group>
          <div className="form-group has-success">
            <label className="form-label mt-4" htmlFor="inputValid">
              Valid input
            </label>
            <input
              type="text"
              value="correct value"
              className="form-control is-valid"
              id="inputValid"
            />
            <div className="valid-feedback">Success! You've done it.</div>
          </div>

          <div className="form-group has-danger">
            <label className="form-label mt-4" htmlFor="inputInvalid">
              Invalid input
            </label>
            <input
              type="text"
              value="wrong value"
              className="form-control is-invalid"
              id="inputInvalid"
            />
            <div className="invalid-feedback">
              Sorry, that username's taken. Try another?
            </div>
          </div>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default SignIn;
