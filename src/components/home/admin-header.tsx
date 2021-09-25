import React, { Component } from 'react';
import {Navbar, Container, Nav } from 'react-bootstrap';
// import house from '../../assets/house.jpg';
import { BrowserRouter as Router} from 'react-router-dom';
// import './bootstrap.min.css';

type HeaderProps = {
    token: string,
    // clearToken: () => void
}

type HeaderState = {

}




class AdminHeader extends Component<HeaderProps, HeaderState> {

    constructor(props: HeaderProps) {
        super(props)
        this.state ={

        }
    }


    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Container>
                {/* <Navbar.Brand href="#home">
                    <img
                    alt=""
                    src= {house}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    />{' '}
                Julee's Resin Shop
                </Navbar.Brand>  */}
                <Navbar bg="dark" expand="lg">
                    <Nav className="me-auto">
                        <Router>
                        <Nav.Link href="/admin/home">Home</Nav.Link>
                        <Nav.Link href="/upload">Upload</Nav.Link>
                        {/* <Nav.Link href="../landing" onClick={() => this.props.clearToken()}>Logout</Nav.Link> */}
                        </Router>
                    </Nav>
                </Navbar>
                </Container>
            </Navbar> 
        )
    }
}

export default AdminHeader;