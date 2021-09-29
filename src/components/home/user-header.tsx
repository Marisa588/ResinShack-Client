import React, { Component } from 'react';
import {Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootswatch/dist/quartz/bootstrap.min.css';

type Props = {
    token: string,
}
type State = {
    role: boolean
    sessionToken: string
  }

class UserHeader extends Component<Props, State> {
    constructor(props: any) {
        super(props)
        this.state = {      
          sessionToken: "",
          role: false
        }
      }

    updateToken = (newToken: string) => {
        localStorage.setItem('token', newToken)
        this.setState({
          sessionToken: newToken
        });
        console.log(this.state.sessionToken)
      }
        clearToken = () => {
          localStorage.clear();
          this.setState({ sessionToken: ""});
          console.log("Token cleared and Logged out");
        };
      updateRole = (newRole: boolean) => {
        // new Boolean(this.state.role).toString()
        localStorage.setItem('role', newRole.toString());
        console.log(newRole);
        this.setState({
          role: newRole
        })
        console.log(newRole)
      }

    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href='/'>
                Julee's Resin Shop
                </Navbar.Brand> 
                <Navbar bg="dark" expand="lg">
                    <Nav className="me-auto">
  
                    </Nav>
                </Navbar>
                <div className="list">
                    <ul>
                        <Link to="/user/favorites"></Link>
                    </ul>
                    </div>
                    <div className='route'>
                 
                    </div>
                </Container>
            </Navbar> 

        )
    }
}

export default UserHeader;