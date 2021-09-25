import React, { Component } from 'react';
import {Navbar, Container, Nav } from 'react-bootstrap';
import house from '../../assets/house.jpg';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './admin'
// import './bootstrap.min.css';




class UserHeader extends Component {




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
  
                    </Nav>
                </Navbar>
                </Container>
            </Navbar> 
        )
    }
}

export default UserHeader;