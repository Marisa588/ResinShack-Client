import React, { Component } from 'react';
import {Navbar, Container, Nav } from 'react-bootstrap';
import './bootstrap.min.css';




class Header extends Component {




    render() {
        return (
            <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Julee's Resin Shack</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#products">Products</Nav.Link>
                    <Nav.Link href="#upload">Upload</Nav.Link>
                    <Nav.Link href="../landing">Logout</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        )
    }
}

export default Header;